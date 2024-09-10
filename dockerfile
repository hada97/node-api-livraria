# Use a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
