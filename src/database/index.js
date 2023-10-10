import mongoose from "mongoose";


const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


const connectToDB = async () => {

    const connectionUrl = 'mongodb+srv://boriyevdev08:asadbek08@e-commerce-store.93qo4wy.mongodb.net/';

    mongoose.connect(connectionUrl, configOptions).then(() => console.log('E-commerce database connected successfully')).catch((err) => console.log(`Error from DB Connection ${err.message}`))

}


export default connectToDB