export default function signo(mes, dia) {
    let a = mes.tolowerCase();
    let b = a == 'setembro' &&  dia >= 23 || a == 'outubro'  &&   dia <=  22;

    if(b == true)
        return 'SIM'
    else 
    return 'NAO'
}



