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
```

## ⚙️ Tecnologias Utilizadas

### Frontend:
- **React** (Vite, TypeScript)
- **Tailwind CSS**
- **Axios** (Requisições HTTP)

## 🚀 Instalação e Execução

1. **Configurar e rodar o frontend:**
   ```sh
   cd frontend
   npm install
   npm start
   ```

   O frontend estará disponível em http://localhost:####

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
