import { Link } from "react-router-dom";

export default function PaginaDeLogin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 relative">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full bg-blue-800 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="src\assets\Images\Sick-Comp (Logo).png" // Vai ser a imagem do usuario
            alt="Sick Comp Logo"
            className="h-8 mr-2"
          />
          <img
            src="src\assets\Images\logoSickComp (1).png" // Substitua pelo caminho correto do nome
            alt="Sick Comp Nome"
            className="h-8"
          />
        </div>
      </header>

      {/* Login Box */}
      <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg w-96">
        <img
          src="src\assets\Images\logoSickComp (1).png" // Substitua pelo caminho correto do nome
          alt="Sick Comp Nome"
          className="h-8"
        />
        <form>
          <div className="mb-4">
            <label htmlFor="login" className="block text-sm mb-2">
              Login
            </label>
            <input
              type="text"
              id="login"
              className="w-full px-4 py-2 rounded bg-blue-700 text-blue-300 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className="block text-sm mb-2">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className="w-full px-4 py-2 rounded bg-blue-700 text-blue-300 focus:outline-none"
            />
          </div>
          <div className="text-right mb-4">
            <Link to="/esqueci-senha" className="text-blue-300 text-sm">
              Esqueci a senha
            </Link>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Entrar
            </button>
            <Link
              to="/CriacaoDeConta"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

