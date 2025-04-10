import React, { useState } from 'react';

const PaginaDeCriacaoDeConta: React.FC = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Lógica para criar a conta
    console.log({ login, senha, tipoUsuario });
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '0 auto',
      padding: '5px'
    }}>
      <h1>Criação de Conta</h1>
      <form onSubmit={handleSubmit}>
        <div style={{
          marginBottom: '10px'
        }}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px'
            }}
          />
        </div>
        <div style={{
          marginBottom: '10px'
        }}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px'
            }}
          />
        </div>
        <div style={{
          marginBottom: '10px'
        }}>
          <label htmlFor="confirmaSenha">Confirme a Senha:</label>
          <input
            type="password"
            id="confirmaSenha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px'
            }}
          />
        </div>
        <div style={{
          marginBottom: '10px'
        }}>
          <label htmlFor="tipoUsuario">Tipo de Usuário:</label>
          <select
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '8px',
              marginTop: '5px'
            }}
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            <option value="cuidador">Cuidador(a)</option>
            <option value="idoso">Idoso</option>
            <option value="familiar">Familiar</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default PaginaDeCriacaoDeConta;

