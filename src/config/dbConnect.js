import mongoose from "mongoose";

// ... (Opcional: Carregar string de conexão de um ambiente ou arquivo)

async function conectaNaDatabase() {
  try {
    const connectionString = process.env.MONGO_URI || 'mongodb+srv://admin:J4oFLP6jRVEbPkrF@nodeapi.8nvi2.mongodb.net/livraria?retryWrites=true&w=majority&appName=nodeAPI'; // Replace placeholders with your actual values

    await mongoose.connect(connectionString);
    return mongoose.connection;
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
    // ... (other error handling)
  }
};


export default conectaNaDatabase;