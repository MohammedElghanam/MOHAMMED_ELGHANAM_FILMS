const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
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

}

module.exports = UserController;