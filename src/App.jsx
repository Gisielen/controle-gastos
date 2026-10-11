import { useState, useEffect } from "react";
import Resumo from "./components/Resumo";
import Formulario from "./components/Formulario";
import ListaTransacoes from "./components/ListaTransacoes";
import "./App.css";

function App() {

  const [transacoes, setTransacoes] = useState(() => {
    const salvas = localStorage.getItem("transacoes");
    return salvas ? JSON.parse(salvas) : [];
  });


  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
  }, [transacoes]);

  function adicionarTransacao(nova) {

    setTransacoes([nova, ...transacoes]);
  }

  function removerTransacao(id) {

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