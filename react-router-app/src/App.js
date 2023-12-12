import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tarefas" component={Tarefas} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </Router>
  );
}

export default App;
