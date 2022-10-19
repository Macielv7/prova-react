export default function cafe(n,l,d){
    let litros = d / 1000
    let total = n * litros
    

    if(l > total)
    {
        l=l+l
    }    
    return l
}   

//    let litros = d / 1000
//    let total = n * litros
