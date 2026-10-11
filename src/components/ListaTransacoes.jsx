import { formatarMoeda, formatarData } from "../utils/formatar";

function ListaTransacoes({ transacoes, aoRemover }) {
  // Se não tem nada ainda, mostra uma mensagem amigável
  if (transacoes.length === 0) {
    return (
      <section className="lista">
        <h2>Transações</h2>
        <p className="vazio">Nenhuma transação ainda. Adicione a primeira! ✨</p>
      </section>
    );
  }

  return (
    <section className="lista">
      <h2>Transações</h2>

      <ul>
        {transacoes.map((t) => (
          <li key={t.id} className={`item ${t.tipo}`}>
            <div className="info">
              <strong>{t.descricao}</strong>
              <small>
                {t.categoria} • {formatarData(t.data)}
              </small>
            </div>

            <div className="direita">
              <span className="valor">
                {t.tipo === "despesa" ? "- " : "+ "}
                {formatarMoeda(t.valor)}
              </span>
              <button
                className="remover"
                onClick={() => aoRemover(t.id)}
                title="Excluir"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaTransacoes;