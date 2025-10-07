import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

process.env.DEBUG = 'mongodb-memory-server:*';

const ConnectDb = async () => {
    try {
        let conn;

     
        if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
           
            const mongoServer = await MongoMemoryServer.create({
                binary: {
                    version: '4.2.0', 
                }
            });
            const mongoUri = mongoServer.getUri();

           
            conn = await mongoose.connect(mongoUri);

            console.log('Connected to MongoDB Memory Server');
        } else {
           
            conn = await mongoose.connect(process.env.MONGO_URL);
            console.log('Connected to MongoDB ');
        }

        return conn;
    } catch (err) {
        console.error('Error connecting to database:', err);
        throw err;
    }
};

export default ConnectDb;

