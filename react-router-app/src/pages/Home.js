import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/tarefas">Ver Tarefas</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;
