import React, { useState } from "react";
import { Link } from "react-router-dom";
import Colors from "../ClassColors";
import { CadastroIdoso } from "../../back-end/cadastroidoso";

const paginaPerfilIdoso: React.FC = () => {
  const [form, setForm] = useState<CadastroIdoso>({
    nomeCompleto: "",
    email: "",
    escolaridade: "",
    telefone1: "",
    telefone2: "",
    valorMin: "",
    valorMax: "",
    endereco: "",
    bairro: "",
    complemento: "",
    cep: "",
    numero: "",
    senhaAtual: "",
    novaSenha: "",
    confirmarNovaSenha: "",
    comorbidades: "",
    fatosIdoso: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode salvar os dados no JSON ou enviar para API
    console.log(form);
  };

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
      {/* Formulário de Cadastro */}
      <main className="flex-1 flex justify-center items-center bg-blue-950">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-900 p-8 rounded-lg shadow-md w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
          <div className="mb-4">
            <label>Nome Completo:</label>
            <input type="text" name="nomeCompleto" value={form.nomeCompleto} onChange={handleChange} className="w-full p-2 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label>E-mail:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full p-2 rounded text-black" required />
          </div>
          <div className="mb-4">
            <label>Escolaridade:</label>
            <input type="text" name="escolaridade" value={form.escolaridade} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4">
            <label>Telefone 1:</label>
            <input type="tel" name="telefone1" value={form.telefone1} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4">
            <label>Telefone 2:</label>
            <input type="tel" name="telefone2" value={form.telefone2} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4 flex gap-2">
            <div className="flex-1">
              <label>Valor Min:</label>
              <input type="number" name="valorMin" value={form.valorMin} onChange={handleChange} className="w-full p-2 rounded text-black" />
            </div>
            <div className="flex-1">
              <label>Valor Max:</label>
              <input type="number" name="valorMax" value={form.valorMax} onChange={handleChange} className="w-full p-2 rounded text-black" />
            </div>
          </div>
          <div className="mb-4">
            <label>Endereço:</label>
            <input type="text" name="endereco" value={form.endereco} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4">
            <label>Bairro:</label>
            <input type="text" name="bairro" value={form.bairro} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4">
            <label>Complemento:</label>
            <input type="text" name="complemento" value={form.complemento} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4 flex gap-2">
            <div className="flex-1">
              <label>CEP:</label>
              <input type="text" name="cep" value={form.cep} onChange={handleChange} className="w-full p-2 rounded text-black" />
            </div>
            <div className="flex-1">
              <label>Número:</label>
              <input type="text" name="numero" value={form.numero} onChange={handleChange} className="w-full p-2 rounded text-black" />
            </div>
          </div>
          <h3 className="text-xl font-bold mt-6 mb-2">Alterar Senha</h3>
          <div className="mb-4">
            <label>Senha Atual:</label>
            <input type="password" name="senhaAtual" value={form.senhaAtual} onChange={handleChange} className="w-full p-2 rounded text-black" />
            <button type="button" className="text-blue-300 text-sm mt-1">Esqueci a senha atual</button>
          </div>
          <div className="mb-4">
            <label>Nova Senha:</label>
            <input type="password" name="novaSenha" value={form.novaSenha} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <div className="mb-4">
            <label>Confirme a Nova Senha:</label>
            <input type="password" name="confirmarNovaSenha" value={form.confirmarNovaSenha} onChange={handleChange} className="w-full p-2 rounded text-black" />
          </div>
          <h3 className="text-xl font-bold mt-6 mb-2">Comorbidades:</h3>
          <div className="mb-4">
            <textarea name="comorbidades" value={form.comorbidades} onChange={handleChange} className="w-full p-2 rounded text-black" placeholder="Digite..."></textarea>
          </div>
          <h3 className="text-xl font-bold mt-6 mb-2">Fatos sobre o Idoso:</h3>
          <div className="mb-4">
            <textarea name="fatosIdoso" value={form.fatosIdoso} onChange={handleChange} className="w-full p-2 rounded text-black" placeholder="Digite..."></textarea>
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
};

export default paginaPerfilIdoso;

