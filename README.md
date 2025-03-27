# Sick Comp Project

Este projeto consiste em uma aplicação web desenvolvida utilizando **React** para o frontend e **Java (Spring Boot)** para o backend, seguindo os princípios do **SOLID** e da **Clean Architecture** para garantir um código modular, escalável e de fácil manutenção.

## 📁 Estrutura do Projeto

A estrutura do projeto é organizada conforme os princípios da Clean Architecture:

```
├── frontend/                  # Aplicação React
│   ├── src/
│   │   ├── components/        # Componentes reutilizáveis
│   │   ├── pages/             # Páginas da aplicação
│   │   ├── services/          # Comunicação com o backend
│   │   ├── hooks/             # Hooks personalizados
│   │   ├── context/           # Gerenciamento de estado global
│   │   ├── App.tsx            # Componente principal
│   │   └── index.tsx          # Ponto de entrada
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                   # Aplicação Java Spring Boot
│   ├── src/main/java/com/sickcomp/
│   │   ├── core/              # Camada central de regras de negócio
│   │   │   ├── application/   # Casos de uso (Regras de negócio)
│   │   │   ├── domain/        # Entidades e Interfaces
│   │   │   ├── services/      # Serviços de domínio
│   │   ├── adapters/          # Adaptadores para entrada e saída de dados
│   │   │   ├── controllers/   # Camada de interface (API REST)
│   │   │   ├── persistence/   # Repositórios e acesso a dados
│   │   │   ├── external/      # Integrações com serviços externos
│   │   ├── infrastructure/    # Implementações técnicas (DB, APIs, etc)
│   │   ├── config/            # Configuração do Spring Boot
│   ├── src/main/resources/
│   │   ├── application.yml    # Configuração da aplicação
│   ├── pom.xml                # Configuração do Maven
│   └── Dockerfile             # Containerização do backend
│
├── README.md                  # Documentação do projeto
└── docker-compose.yml          # Orquestração dos serviços
```

## ⚙️ Tecnologias Utilizadas

### Frontend:
- **React** (Vite, TypeScript)
- **Tailwind CSS**
- **Axios** (Requisições HTTP)

### Backend:
- **Java** (Spring Boot)
- **Banco de Dados PostgreSQL**
- **Cypress** (Testes Unitários e modulares)

## 🚀 Instalação e Execução

### 📌 Requisitos:
- Node.js e npm
- Java 17+
- Docker e Docker Compose (opcional)

### 🔧 Passos para rodar o projeto:

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/sick-comp-project.git
   cd sick-comp-project
   ```

2. **Configurar e rodar o backend:**
   ```sh
   cd backend
   mvn clean install
   mvn spring-boot:run
   ```

   O backend estará disponível em `http://localhost:8080`

3. **Configurar e rodar o frontend:**
   ```sh
   cd frontend
   npm install
   npm start
   ```

   O frontend estará disponível em http://localhost:####

### 🐳 Executando com Docker
Para rodar o projeto utilizando **Docker**, execute:
```sh
docker-compose up --build
```

## 🛠️ Princípios Aplicados

### ✅ SOLID Principles:
1. **Single Responsibility Principle (SRP)**: Cada classe e componente tem uma única responsabilidade.
2. **Open/Closed Principle (OCP)**: Código modular que permite extensões sem necessidade de modificação.
3. **Liskov Substitution Principle (LSP)**: Uso de abstrações para evitar dependências diretas.
4. **Interface Segregation Principle (ISP)**: Interfaces específicas para evitar acoplamento excessivo.
5. **Dependency Inversion Principle (DIP)**: Uso de inversão de dependências para desacoplamento.

### ✅ Clean Architecture:
- **Divisão clara das responsabilidades entre as camadas Core, Adapters e Infrastructure.**
- **Isolamento das regras de negócio na camada Core.**
- **Facilita testes unitários e de integração.**
- **Mantém o código escalável e de fácil manutenção.**

### 📓 Documentação dos frameworks e ferramentas utilizadas:
- **Frontend:**
1. React: https://pt-br.react.dev/reference/react
2. TypeScript: https://www.typescriptlang.org/pt/docs/
3. Tailwind CSS: https://v2.tailwindcss.com/docs
4. Axios: https://axios-http.com/ptbr/docs/intro

- **Backend:**
1. Spring Boot: https://docs.spring.io/spring-framework/reference/index.html
2. PostgreSQL: https://www.postgresql.org/docs/
3. Cypress: https://docs.cypress.io/app/get-started/why-cypress


