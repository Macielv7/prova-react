function acai(qtdPeq, qtdMed, qtdGra, desconto) {
    

        let total = qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.50; 
        let r = (total * desconto) / 100;
        let resp = total - r;


        if(qtdPeq < 0  || qtdMed < 0 || qtdGra < 0){
            return 'numero invalido';
        }

        else if(qtdPeq > 15  || qtdMed > 15 || qtdGra > 15){
            return 'numero invalido';
        }

        else{
            return resp;
        }
    
}


export default acai;
