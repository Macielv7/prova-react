export default function signo(mes, dia) {
    let a = mes.toLowerCase();
    let b = a == 'setembro' &&  dia >= 23 || a == 'outubro'  &&   dia <=  22;

    if(dia >= 32){
        return 'dia inválido'
    }
    else if (mes != 'setembro' && mes != 'outubro')
    {
        return 'mes inválido'
    }
    else if (b === true){
        return 'SIM'
    }
    else {
        return 'NAO'
    }


}



