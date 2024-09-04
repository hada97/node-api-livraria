import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions.js'; 

// Certifique-se de que o caminho está correto

import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando!")
});

