function acai(qtdPeq, qtdMed, qtdGra, desconto) {
    

    let total = qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.50; 
    let r = (total * desconto) / 100;
    let resp = total - r;

    return resp ;
}


export default acai;
