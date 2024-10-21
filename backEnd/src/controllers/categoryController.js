const categoryModel = require("../models/categoryModel");


class CategoryController {

    static async create (req, res) {
        const { title } = req.body;

        let findCategory = await categoryModel.findOne({ title });

        if (findCategory) {
          return res.status(400).json({ msg: 'Category already exists' });
        }

        try {
            const category = await categoryModel.create({ title });
            return res.status(201).json({ category });
        } catch (error) {
            console.log(error.message);            
            return res.status(400).json({ message: error.message });
        }
    }

    static async read (req, res) {

        try {
            const categorys = await categoryModel.find();
            return res.json(categorys);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async update (req, res) {
        const { id } = req.params;
        const { title } = req.body;
        

        try {
            
            const updatedCategory = await categoryModel.findByIdAndUpdate(
                id,
                { title },
                { new: true }
            );


            if (!updatedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }

            return res.status(200).json({
                message: 'Category updated successfully',
                category: updatedCategory,
            });

        } catch (error) {
            console.error(error);            
            return res.status(500).json({ message: 'Error updating category', error });
        }

    }

    static async delete (req, res) {
        const { id } = req.params;

        try {
            
            const deletedCategory = await categoryModel.findByIdAndDelete(id);

            if (!deletedCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }

            return res.status(200).json({ message: 'Category deleted successfully' });

        } catch (error) {
            return res.status(500).json({ message: 'Error deleting category', error });
        }

    }

}

module.exports = CategoryController;