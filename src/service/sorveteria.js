export default function sorvete (gramas) {
    let r = 0;
    if (gramas <= 0)
        r = 'Peso inválido';
        else if (gramas < 1000)
        r = `O total a se pagar é: ${(3.50*(gramas/100)).toFixed(2)}`

        else 
        r = `O total a se pagar é: ${(3*(gramas/100)).toFixed(2)}`

        return r;
}