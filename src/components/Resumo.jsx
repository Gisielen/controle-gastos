import { formatarMoeda } from "../utils/formatar";

function Resumo({ transacoes }) {
  // Soma só as receitas
  const receitas = transacoes
    .filter((t) => t.tipo === "receita")
    .reduce((total, t) => total + t.valor, 0);

  // Soma só as despesas
  const despesas = transacoes
    .filter((t) => t.tipo === "despesa")
    .reduce((total, t) => total + t.valor, 0);

  const saldo = receitas - despesas;

  return (
    <section className="resumo">
      <div className="cartao receita">
        <span>Receitas</span>
        <strong>{formatarMoeda(receitas)}</strong>
      </div>

      <div className="cartao despesa">
        <span>Despesas</span>
        <strong>{formatarMoeda(despesas)}</strong>
      </div>

      <div className="cartao saldo">
        <span>Saldo</span>
        <strong>{formatarMoeda(saldo)}</strong>
      </div>
    </section>
  );
}

export default Resumo;