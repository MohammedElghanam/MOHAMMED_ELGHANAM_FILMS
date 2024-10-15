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

}

module.exports = UserController;