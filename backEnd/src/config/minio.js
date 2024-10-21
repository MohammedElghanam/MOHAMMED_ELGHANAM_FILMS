const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',  
    secretKey: 'minioadmin'   
});

const connectMinio = async () => {
    try {
        
        const buckets = await minioClient.listBuckets();
        console.log('connected to minio seccussfly');
        console.log(buckets);
    } catch (error) {
        console.error(' error connecting with MinIO:', error);
    }
};

module.exports = { minioClient, connectMinio };