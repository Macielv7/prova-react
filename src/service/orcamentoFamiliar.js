




function orcamentoFamiliar(ganhos, gastos) {
    let total = (gastos / ganhos) * 100;

   
    if (total < 30) {
        return "Parabéns, está gerenciando bem seu orçamento!";
    }
    else if (total < 50) {
        return "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
    }
    else if (total < 80) {
        return "Atenção, melhor conter os gastos!";
    }
    else if (total <= 100) {
        return "Cuidado, seu orçamento pode ficar comprometido!";
    }
    else {
        return "Orçamento comprometido! Hora de rever seus gastos!";
    }

}

export default orcamentoFamiliar;




