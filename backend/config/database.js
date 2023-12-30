const mongoose = require('mongoose')

exports.connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "SocialMedia",
            writeConcern: { w: 'majority' }

        });

        console.log(`Database connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};