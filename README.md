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
│   │   ├── application/       # Casos de uso (Regras de negócio)
│   │   ├── domain/            # Entidades e Interfaces
│   │   ├── infrastructure/    # Implementações técnicas (DB, APIs, etc)
│   │   ├── controllers/       # Camada de interface (API REST)
│   │   └── config/            # Configuração do Spring Boot
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
- **React Router** (Navegação)

### Backend:
- **Java** (Spring Boot, Spring Web, Spring Data JPA)
- **Banco de Dados PostgreSQL**
- **Flyway** (Versionamento do banco de dados)
- **Lombok** (Redução de boilerplate code)
- **JUnit** e **Mockito** (Testes unitários)

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

   O frontend estará disponível em `http://localhost:3000`

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
- **Separa lógica de negócio (application e domain) da camada de infraestrutura (infra, controllers).**
- **Facilita testes unitários e de integração.**
- **Mantém o código escalável e de fácil manutenção.**

## 🏗️ Como Contribuir

1. Faça um **fork** do repositório.
2. Crie uma **branch** para sua feature:
   ```sh
   git checkout -b minha-feature
   ```
3. Faça commit das suas mudanças:
   ```sh
   git commit -m 'Adicionando nova feature'
   ```
4. Faça push para a branch:
   ```sh
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para utilizá-lo e contribuir!

---

💡 **Dúvidas ou sugestões?** Entre em contato ou abra uma issue no repositório! 🚀

