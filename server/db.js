import mongoose from "mongoose";

export async function connectionMongo(){
    mongoose.connect('mongodb+srv://fabricio:123@studycluster.u4tk2wy.mongodb.net/alura-node')
        .then(suc => console.log('Connection was successfully executed.'))
        .catch(err => console.error('Connection was not concluded'));
}