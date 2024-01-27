FROM node:lts-alpine

# Crie um diretório de trabalho
WORKDIR /app

# Copie o código fonte
COPY . .

# Instale as dependências
RUN npm install --force

# Exponha a porta (se necessário)
EXPOSE 3000

# Comando padrão para iniciar o serviço
CMD ["node", "server.js"]
