# 📋 Listagem e Cadastro de Membros – NERDS

Este projeto consiste em uma aplicação web para **cadastro, listagem, edição, exclusão e busca de membros do NERDS**, desenvolvida como parte do desafio técnico proposto.

A aplicação consome uma **API mockada** utilizando `json-server`, garantindo persistência de dados e funcionamento completo do CRUD.

---

## Tecnologias Utilizadas

- **Vue.js 3**
- **Vite**
- **Axios**
- **JSON Server** (API mockada)
- **HTML5 / CSS3**
- **JavaScript (ES6+)**

---

## Funcionalidades

- Cadastro de membros
- Validação de campos obrigatórios (Nome, Matrícula e E-mail)
- Listagem reativa dos membros
- Edição de membros
- Exclusão de membros
- Busca por **nome ou matrícula**
- Interface organizada e responsiva
- Componentização e código limpo

---

## Estrutura de Componentes

- `HeaderComponent.vue` → Cabeçalho com logo e nome da empresa
- `MembersForm.vue` → Formulário de cadastro e edição
- `MembersTable.vue` → Tabela de listagem dos membros
- `Home.vue` → Página principal (orquestra os componentes)

---

##  Pré-requisitos

Antes de iniciar, você precisa ter instalado em sua máquina:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

---

##  Como Rodar o Projeto Localmente

## execute em um terminal
 npx json-server --watch db.json --port 3000

## execute em outro terminal
npm run dev
