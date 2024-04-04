# Use a base image that includes the latest versions of Node.js and MySQL
FROM gitpod/workspace-full

# Instale a versão desejada do Node.js usando nvm
RUN bash -c ". .nvm/nvm.sh \
    && nvm install 18.16.0 \
    && nvm use 18.16.0 \
    && nvm alias default 18.16.0"

# Instale a versão desejada do npm
RUN npm install -g npm@9.5.1

# Instale a versão desejada do MySQL
RUN sudo apt-get update && \
    sudo apt-get install -y mysql-server=8.0

# Copie os arquivos do seu projeto para o contêiner
COPY . .

# Exponha as portas necessárias
EXPOSE 3000 3306

# Defina o comando para iniciar o aplicativo
CMD ["npm", "start"]
