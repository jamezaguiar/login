import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await api.post('sessions', { email, password });
      console.log(response);
      history.push('/success');
    } catch (error) {
      console.log(error);
      history.push('/fail');
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
