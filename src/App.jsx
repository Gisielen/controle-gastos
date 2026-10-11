import { useState, useEffect } from "react";
import Resumo from "./components/Resumo";
import Formulario from "./components/Formulario";
import ListaTransacoes from "./components/ListaTransacoes";
import "./App.css";

function App() {
  // ESTADO: a lista de transações.
  // Começa lendo o que estava salvo no navegador (ou uma lista vazia).
  const [transacoes, setTransacoes] = useState(() => {
    const salvas = localStorage.getItem("transacoes");
    return salvas ? JSON.parse(salvas) : [];
  });

  // EFEITO: toda vez que a lista mudar, salva no navegador.
  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  function adicionarTransacao(nova) {
    // Coloca a nova no começo e mantém as antigas depois
    setTransacoes([nova, ...transacoes]);
  }

  function removerTransacao(id) {
    // Mantém todas, menos a que tem esse id
    setTransacoes(transacoes.filter((t) => t.id !== id));
  }

  return (
    <div className="container">
      <header className="topo">
        <h1>💰 Controle de Gastos</h1>
        <p>Organize suas finanças de um jeito simples</p>
      </header>

      <Resumo transacoes={transacoes} />
      <Formulario aoAdicionar={adicionarTransacao} />
      <ListaTransacoes
        transacoes={transacoes}
        aoRemover={removerTransacao}
      />
    </div>
  );
}

export default App;