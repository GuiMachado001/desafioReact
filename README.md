Markdown
# 🚀 Desafio Técnico - Full Stack Developer (React & Node.js)

Este projeto é uma aplicação completa para cadastro e listagem de clientes, desenvolvida como parte de um desafio técnico. A solução abrange desde o banco de dados relacional até uma interface moderna e responsiva.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** (com TypeScript)
- **Material UI** (Componentes visuais e estilização)
- **React Router** (Gerenciamento de rotas e proteção)
- **Axios** (Integração com API e Interceptors para JWT)
- **jsPDF & jsPDF-AutoTable** (Geração de relatórios em PDF)

### Backend
- **Node.js** (com TypeScript)
- **Express** (Framework web)
- **TypeORM** (ORM para comunicação com o banco)
- **PostgreSQL** (Banco de dados relacional)
- **JWT (JSON Web Token)** (Autenticação simples)

---

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v18+)
- Docker e Docker Compose (opcional, para o banco de dados)

### 1. Clonar o Repositório
```bash
git clone [https://github.com/GuiMachado001/desafioReact.git](https://github.com/GuiMachado001/desafioReact.git)
cd desafioReact
2. Configurar o Backend
Bash
cd backend
npm install
# Crie um arquivo .env baseado no .env.example ou use as configurações padrão
npm run dev
3. Configurar o Frontend
Bash
cd ../frontend
npm install
npm run dev
🐳 Rodando com Docker (Diferencial)
Caso prefira rodar o banco de dados via Docker:

Bash
docker-compose up -d
🔐 Credenciais de Acesso
Para testar a aplicação, utilize os dados fixos abaixo:

Usuário: admin

Senha: admin

🎯 Funcionalidades Implementadas
[x] Autenticação: Login simples com geração de token JWT.

[x] Proteção de Rotas: Apenas usuários autenticados acessam a listagem e o cadastro.

[x] CRUD de Clientes: Criação, Listagem e Edição de dados.

[x] Geração de PDF: Exportação da lista de clientes para documento PDF.

[x] UI/UX: Interface limpa e responsiva utilizando Material UI.

[x] TypeScript: Tipagem estática em todo o projeto para maior segurança.

📂 Organização do Projeto
A estrutura foi pensada seguindo os padrões de separação de responsabilidades:

Backend:

src/entities: Modelagem do banco de dados.

src/services: Regras de negócio.

src/controllers: Lógica de entrada/saída das requisições.

src/middlewares: Proteção de rotas e validação de token.

Frontend:

src/pages: Telas principais da aplicação.

src/components: Componentes reutilizáveis (ex: Rota Protegida).

src/services: Configuração do Axios e integração com a API.

src/utils: Funções utilitárias (ex: gerador de PDF).

📄 Licença
Este projeto está sob a licença MIT.

Desenvolvido por [Seu Nome] 🚀