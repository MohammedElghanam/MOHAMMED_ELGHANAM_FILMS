const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
class UserController{

    static async register(req, res) {

        const { name, email, password, image, role } = req.body;
        let user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ msg: 'User already exists' });
        }
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashedPassword, image, role });
            return res.status(201).json({ user });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
          
    }

    static async login(req, res) {

        const { email, password } = req.body;

        try {

            const user = await User.findOne({ email });

            if (!user) return res.status(400).json({ message: 'User not found' });
            
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
            
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: '1h',
            });

            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
            return res.json({ user, token });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async forgotPassword(req, res) {
        
        const { email } = req.body;
        // return res.json({ dd });

        try {

            const user = await User.findOne({ email });

            if (user) {

                const resetToken = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
                    expiresIn: '1h',
                });

                // const resetToken = crypto.randomBytes(20).toString('hex');
                res.cookie('resetToken', resetToken, { httpOnly: true, maxAge: 3600000, secure:false });
                
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
                            <a href="http://localhost:3000/users/reset_password/${resetToken}">click here</a>
                            <h1>${resetToken}</h1>`
                };
                
                await transport.sendMail(mailOptions);
                res.status(200).json({ message: 'A password reset link has been sent to your email.', resetToken: resetToken });

            } else {
                res.status(404).json({ error: 'This email is not registered.' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while sending the email.' });
        }
    }
    
}

module.exports = UserController;