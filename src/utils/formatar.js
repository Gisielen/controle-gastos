export function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

export function formatarData(dataISO) {
    return new Date(dataISO).toLocaleDateString('pt-BR'); 
}