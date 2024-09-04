
import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect('mongodb+srv://admin:J4oFLP6jRVEbPkrF@nodeapi.8nvi2.mongodb.net/livraria?retryWrites=true&w=majority&appName=nodeAPI');
  return mongoose.connection;
};

export default conectaNaDatabase;
