import React from "react";
import { Link } from "react-router-dom"; // Importa o Link do react-router-dom
import Colors from "../ClassColors";

const paginaPerfilCuidadora: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: Colors.Backgrond_Color }}
      className="flex min-h-screen min-w-screen text-white overflow-hidden"
    >
      {/* Sidebar */}
      <aside
        style={{ backgroundColor: Colors.Backgrond_Color }}
        className="w-1/5 bg-blue-800 flex flex-col items-center py-6"
      >
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold">
            Sick <span className="text-blue-300">Comp</span>
          </h1>
        </div>
        <img
          src="src/assets/Images_Icons/iconeUsuario.png" // Substitua pelo caminho correto do logo
          alt="Sick Comp Logo"
          className="h-30 mt-6 mr-4 mb-6"
        />
        <div>
          <nav className="flex flex-col w-full items-center">
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Home</span>
            </Link>
            <Link
              to="/PerfilIdoso"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Perfil</span>
            </Link>
            <Link
              to="/PerfilCuidadora"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Enfermeiras</span>
            </Link>
            <Link
              to="/Avaliacoes"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Avaliações</span>
            </Link>
            <Link
              to="/Configuracoes"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Configurações</span>
            </Link>
          </nav>
        </div>
        <div className="mt-auto">
          <Link
            to="/Login"
            className="flex items-center px-4 py-2 hover:bg-blue-700 transition"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Log Out
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default paginaPerfilCuidadora;