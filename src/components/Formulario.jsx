import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";


registerLocale("pt-BR", ptBR);

function Formulario({ aoAdicionar }) {

const [descricao, setDescricao] = useState("");
const [valor, setValor] = useState("");
const [tipo, setTipo] = useState("despesa");
const [categoria, setCategoria] = useState("Alimentação");
const [data, setData] = useState(new Date());

function enviar(evento) {

    evento.preventDefault();


    if (descricao.trim() === "" || Number(valor) <= 0) {
        alert("Preencha a descrição e um valor maior que zero.");
        return;
    }


    const novaTransacao = {
        id: Date.now(), 
        descricao: descricao.trim(),
        valor: Number(valor),
        tipo: tipo,
        categoria: categoria,
        data: data.toISOString(),
    };


    aoAdicionar(novaTransacao);

    setDescricao("");
    setValor("");
    setData(new Date());
}

    return (
    <form className="formulario" onSubmit={enviar}>
        <h2>Nova transação</h2>

        <div className="campo">
        <label>Descrição</label>
        <input
            type="text"
            placeholder="Ex: Mercado, Salário..."
            onChange={(e) => setDescricao(e.target.value)}
        />
        </div>

        <div className="linha">
        <div className="campo">
            <label>Valor (R$)</label>
            <input
            type="number"
            placeholder="0,00"
            step="0.01"
            min="0"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            />
        </div>

        <div className="campo">
            <label>Data</label>
            <DatePicker
            selected={data}
            onChange={(novaData) => setData(novaData)}
            locale="pt-BR"
            dateFormat="dd/MM/yyyy"
            />
        </div>
        </div>

        <div className="linha">
        <div className="campo">
            <label>Tipo</label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
            </select>
        </div>

        <div className="campo">
            <label>Categoria</label>
            <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            >
                <option>Alimentação</option>
                <option>Transporte</option>
                <option>Moradia</option>
                <option>Lazer</option>
                <option>Saúde</option>
                <option>Educação</option>
                <option>Salário</option>
                <option>Outros</option>
            </select>
        </div>
        </div>

        <button type="submit" className="botao">
        Adicionar
        </button>
    </form>
    );
}

export default Formulario;