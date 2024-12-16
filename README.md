# Projeto Next.js

Bem-vindo ao projeto desenvolvido com [Next.js](https://nextjs.org/). Este guia ajudará você a configurar e executar o projeto localmente.

## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**
   ```bash
   git clone [<URL_DO_REPOSITORIO>](https://github.com/Campos1911/Desafio-Aumo)
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```

3. **Instale as dependências:**
   ```bash
   yarn install
   ```

## Executando o projeto

1. **Inicie o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```

2. **Acesse a aplicação no navegador:**
   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- **`yarn dev`**: Inicia o servidor de desenvolvimento.
- **`yarn build`**: Gera uma build para produção.
- **`yarn start`**: Inicia o servidor para produção após a build.
- **`yarn lint`**: Executa o linter para verificar a qualidade do código.

## Configuração Adicional

### Variáveis de Ambiente

Certifique-se de criar um arquivo `.env.local` na raiz do projeto para configurar as variáveis de ambiente. Exemplo:

```
NEXT_PUBLIC_BACKEND_URL=https://randomuser.me/api/
```
