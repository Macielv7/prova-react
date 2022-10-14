
function ingressosCinema(qtdMeia, qtdInteiras, dia, pais) {
    let total = 0;

    if (pais == "nacional") {
        total = (qtdMeia + qtdInteiras) * 5.0;
    }
    else {
        if (dia == "quarta-feira") {
            total = (qtdMeia + qtdInteiras) * (28.5 / 2);
        }
        else {
            total = (qtdInteiras * 28.5) + (qtdMeia * 28.5 / 2);
        }
    }

    return total;
}

export default ingressosCinema;


