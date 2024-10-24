const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const blacklistedTokens = [];
const path = require('path');
const fs = require('fs');
const { minioClient } = require("../config/minio");
class UserController{

    static async register(req, res) {

        const { name, email, password, role } = req.body;
        const image = await UserController.uploadDefaultImage(); 
        console.log(name, email, password, image, role);
        
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword, image, role });
            return res.status(201).json({ message: "send success", user: user });
        } catch (error) {
            console.log(error.message);            
            return res.status(400).json({ message: error.message });
        }
          
    }

    static async login(req, res) {

        const { email, password } = req.body;

        try {

            const user = await User.findOne({ email });

            if (!user) return res.status(400).json({ error: 'User not found' });
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ error: 'Incorrect password' });
            
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            return res.json({ ...{user}, token: token });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    static async forgotPassword(req, res) {
        
        const { email } = req.body;
        // return res.json({ dd });

        try {

            const user = await User.findOne({ email });

            if (user) {

                const reset_Token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                var transport = nodemailer.createTransport({
                    host: "sandbox.smtp.mailtrap.io",
                    port: 2525,
                    auth: {
                      user: process.env.EMAIL,
                      pass: process.env.EMAIL_PASSWORD
                    }
                });
                  
                
                const mailOptions = {
                    from: "elghanammohammed465@gmail.com",
                    to: user.email,
                    subject: 'Reset Password',
                    html: `<p>To reset your password, please click on the following link:</p>
                            <a href="http://localhost:3001/reset">Click here to reset your password</a>`
                };
                
                await transport.sendMail(mailOptions);
                res.status(200).json({ message: 'A password reset link has been sent to your email.', reset_Token: reset_Token });

            } else {
                res.status(404).json({ error: 'This email is not registered.' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while sending the email.' });
        }
    }

    static async resetPassword(req, res) {
        const { resetToken, newPassword } = req.body;
    
        try {
            
            const { email } = jwt.verify(resetToken, process.env.JWT_SECRET);
            
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ error: 'User not found.' });
    
            user.password = await bcrypt.hash(newPassword, 10);
            const updatedUser = await user.save();
            
            if (!updatedUser) return res.status(500).json({ error: 'Password update failed.' });
    
            return res.status(200).json({ message: 'Password has been reset successfully.' });
    
        } catch (err) {
            return res.status(500).json({ error: 'An error occurred while resetting the password.', details: err.message });
        }
    }

    static isTokenBlacklisted (token) {
        return blacklistedTokens.includes(token);
    };

    static logout(req, res) {

        
        const authHeader = req.header('Authorization');
    
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }
    
        const token = authHeader.split(' ')[1]; 
        blacklistedTokens.push(token);
    
        res.json({ message: 'Logged out successfully' });
    }

    static async getAllusers(req, res) {

        try {
          const users = await User.find();
          return res.json(users);
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
        
    }

    static async uploadDefaultImage () {
        const filePath = 'c:/Users/YouCode/Downloads/default.jpg';
        const fileBuffer = fs.readFileSync(filePath);
        const fileName = 'default.jpg';

        try {
            await minioClient.putObject('imageuser', fileName, fileBuffer, fileBuffer.length, {
                'Content-Type': 'image/jpeg',
            });
            console.log('Image uploaded successfully.');
            return `http://localhost:9000/imageuser/${fileName}`;
        } catch (error) {
            console.error('Error uploading to MinIO:', error);
            throw error;
        }
    }    
}

module.exports = UserController;





