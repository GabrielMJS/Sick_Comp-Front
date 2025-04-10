import React from "react";

const paginaHome: React.FC = () => {
  return (
    <div className="flex min-h-screen min-w-screen bg-blue-900 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-800 flex flex-col items-center py-6">
        <div className="flex items-center mb-8">
          <h1 className="text-2xl font-bold">
            Sick <span className="text-blue-300">Comp</span>
          </h1>
        </div>
        <img
          src="src/assets/Images/iconeUsuario.png" // Substitua pelo caminho correto do logo
          alt="Sick Comp Logo"
          className="h-10 mr-2"
        />
        <div>
          <nav className="flex flex-col w-full items-center">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Home</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Perfil</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Enfermeiras</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Avaliações</span>
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 transition w-4/5 justify-between"
            >
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                {/* Ícone pode ser colocado aqui */}
              </div>
              <span className="ml-4">Configurações</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto">
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-blue-700 transition"
          >
            <i className="fas fa-sign-out-alt mr-2"></i> Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
        <div className="flex items-center bg-blue-800 rounded-lg p-4 mb-6">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full bg-transparent text-white placeholder-blue-300 focus:outline-none"
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Histórico */}
          <section className="col-span-2 bg-blue-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Histórico:</h2>
            <div className="space-y-4">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-700 p-4 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Ciclano Funalo da Silva Sales</h3>
                      <p className="text-sm text-blue-300">
                        Lorem ipsum dolor sit amet. Rem sequi laudantium eos
                        error voluptate rem facilis nesciunt aut dolorem
                        voluptate ut facilis enim.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Principais Buscas */}
          <section className="bg-blue-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Principais Buscas</h2>
            <div className="space-y-2">
              {["Busca 1", "Busca 2", "Busca 3", "Busca 4"].map((busca, index) => (
                <div
                  key={index}
                  className="bg-blue-700 px-4 py-2 rounded-lg flex justify-between items-center"
                >
                  <span>{busca}</span>
                  <button className="text-blue-300 hover:text-white">x</button>
                </div>
              ))}
            </div>
          </section>

          {/* Avaliação */}
          <section className="bg-blue-800 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Sua Avaliação</h2>
            <div className="flex items-center space-x-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <i
                    key={index}
                    className={`fas fa-star ${index < 4 ? "text-yellow-400" : "text-blue-300"
                      }`}
                  ></i>
                ))}
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Exibir Detalhes
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default paginaHome;