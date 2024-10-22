const filmModel = require("../models/filmModel");
const { minioClient } = require("../config/minio");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


class filmController {

    static async create (req, res){
        const { title, description, releaseYear, categoryId } = req.body;
        const video = req.files['video'][0];
        const image = req.files['image'][0];

        try {

            const imageUrl = await filmController.uploadToMinio(image.originalname, image.buffer, image.mimetype);

            const videoUrl = await filmController.uploadToMinio(video.originalname, video.buffer, video.mimetype);            

            const film = await filmModel.create({ title, description, releaseYear, imageUrl, videoUrl, categoryId });
            // console.log(film);
            
            return res.status(200).json({ message: 'Film created successfully', film: film });
        } catch (error) {
            console.error('Error creating film:', error);
            return res.status(500).json({ message: 'Error creating film', error });
        }
    }

    static async read (req, res){
        try {
            // const cat = t.;
            const films = await filmModel.find().populate('categoryId');
            return res.json(films);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { title, description, releaseYear, categoryId } = req.body;
        const video = req.files?.['video']?.[0]; 
        const image = req.files?.['image']?.[0];
        // console.log({ id: id, title: title, description:description,  releaseYear:releaseYear, categoryId:categoryId});            
        // return res.status(200).json({ id: id, title: title, description:description,  releaseYear:releaseYear, categoryId:categoryId});
        
        try {                
            let imageUrl;
            if (image) {
                imageUrl = await filmController.uploadToMinio(image.originalname, image.buffer, image.mimetype);
            }
                    
            let videoUrl;
            if (video) {
                videoUrl = await filmController.uploadToMinio(video.originalname, video.buffer, video.mimetype);
            }
    
            const updatedFilm = await filmModel.findByIdAndUpdate(
                id,
                { 
                    title, 
                    description, 
                    releaseYear, 
                    ...(imageUrl && { imageUrl }), 
                    ...(videoUrl && { videoUrl }),
                    categoryId 
                },
                { new: true } 
            );
    
            return res.status(200).json({ message: 'Film updated successfully', film: updatedFilm });
        } catch (error) {
            console.error('Error updating film:', error);
            return res.status(500).json({ message: 'Error updating film', error });
        }
    }
    
    static async delete (req, res){
        const { id } = req.params;

        try {
            
            const deletedFilm= await filmModel.findByIdAndDelete(id);

            if (!deletedFilm) {
                return res.status(404).json({ message: 'Film not found' });
            }

            return res.status(200).json({ message: 'Film deleted successfully' });

        } catch (error) {
            return res.status(500).json({ message: 'Error deleting film', error });
        }
    }

    static async uploadToMinio (fileName, fileBuffer, mimeType) {
        try {
            const response = await minioClient.putObject('films', fileName, fileBuffer, fileBuffer.length, {
                'Content-Type': mimeType,
            });
            console.log('File uploaded successfully:', response);
            return `http://localhost:9000/films/${fileName}`; 
        } catch (error) {
            console.error('Error uploading to MinIO:', error);
            throw error;
        }
    };
    
}

module.exports = { filmController, upload };