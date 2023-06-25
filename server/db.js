import mongoose from "mongoose";
import 'dotenv/config'

export async function connectionMongo(){
    mongoose.connect(process.env.URI_STRING)
        .then(suc => console.log('Connection was successfully executed.'))
        .catch(err => console.error('Connection was not concluded'));
}