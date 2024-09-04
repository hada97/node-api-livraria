
import mongoose from "mongoose";


async function conectaNaDatabase(){
mongoose.connect("mongodb+srv://admin:root@nodeapi.8nvi2.mongodb.net/livraria?retryWrites=true&w=majority&appName=nodeAPI");
return mongoose.connection;
};

export default conectaNaDatabase;


