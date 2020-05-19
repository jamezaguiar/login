import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Login() {
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.get('login');
      console.log(response);
      history.push('/success');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
