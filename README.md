# 🚀 Client Management System - Full Stack Challenge

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify" />
</p>

## 📌 Sobre o Projeto

Este projeto é uma aplicação **Full-Stack** completa para o gerenciamento de clientes. Desenvolvida para um desafio técnico, a solução contempla desde a persistência de dados em um banco relacional até a interface de usuário moderna e a geração de relatórios em PDF.

A aplicação foi construída focando em boas práticas de componentização, tipagem rigorosa com **TypeScript** e separação de responsabilidades (Clean Code).

---

## 🔗 Links de Acesso
- **🌐 Live Demo (Frontend):** [Visitar Aplicação](https://desafiomilliontec.netlify.app)

---

## 🛠️ Stack Tecnológica

### **Frontend**
* **React + TypeScript:** Desenvolvimento de interface reativa e tipada.
* **Material UI (MUI):** Biblioteca de componentes para um design moderno e responsivo.
* **React Router Dom:** Gerenciamento de rotas e proteção de acesso.
* **Axios:** Cliente HTTP para integração com a API.
* **jsPDF & autoTable:** Geração de relatórios PDF diretamente no navegador.

### **Backend**
* **Node.js + TypeScript:** Ambiente de execução e segurança no desenvolvimento.
* **TypeORM:** Mapeamento Objeto-Relacional para manipulação do PostgreSQL.
* **PostgreSQL (Supabase):** Banco de dados relacional robusto.
* **JWT (JSON Web Token):** Autenticação e proteção de endpoints.
* **CORS:** Configuração de segurança para acesso entre domínios.

---

## 🔐 Credenciais de Acesso

Para testar as funcionalidades protegidas, utilize os dados abaixo na tela de login:

| Credencial | Valor |
| :--- | :--- |
| **Usuário** | `admin` |
| **Senha** | `admin` |

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório
```bash
git clone [https://github.com/GuiMachado001/desafioReact.git](https://github.com/GuiMachado001/desafioReact.git)
cd desafioReact
```

2. Configurar o Backend
```bash
cd backend
npm install
# Crie um arquivo .env com as credenciais do seu banco de dados
npm run dev
```

3. Configurar o Frontend
```bash
cd ../frontend
npm install
npm run dev
```

📄 Funcionalidades Implementadas
[x] Autenticação: Sistema de login com usuário fixo e geração de Token JWT.

[x] Proteção de Rotas: Acesso às telas de cadastro e listagem apenas para usuários autenticados.

[x] CRUD de Clientes: Criação, leitura, atualização e exclusão de registros.

[x] Relatórios: Botão para exportação automática da lista de clientes em formato PDF.

[x] Deploy Automatizado: CI/CD configurado para deploy contínuo no Render e Netlify.


👤 Autor
Guilherme Machado 

<p align="left">
<a href="www.linkedin.com/in/guilherme-machado-neves-396693279" target="_blank">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/LinkedIn-0077B5%3Fstyle%3Dfor-the-badge%26logo%3Dlinkedin%26logoColor%3Dwhite" alt="LinkedIn" />
</a>
</p>
