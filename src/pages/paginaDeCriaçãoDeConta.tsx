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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1c398e',
      }}
    >
      <form
        style={{
          width: '400px',
          padding: '20px',
          color: 'white',
          backgroundColor: '#193cb8',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            name="login"
            style={{
              width: '100%',
              color: '#8ec5fa',
              padding: '10px',
              backgroundColor: '#1447e6',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1447e6',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="confirmeSenha">Confirme a Senha</label>
          <input
            type="password"
            id="confirmeSenha"
            name="confirmeSenha"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1447e6',
              marginTop: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="tipoUsuario">Tipo de usuário</label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '5px',
              backgroundColor: '#1447e6',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            <option value="">Selecione uma opção</option>
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

