import './index.scss';

import {useEffect, useState} from 'react'

export default function Index() {

  const [entrada, setEntrada] = useState(0);
  const [empreendimento, setEmpreendimento] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [periodo, setPeriodo] = useState(0);

  const [Resposta,setResposta] = useState('');

  function capital(){
    let capital =  empreendimento -entrada ;
    let i = taxa / 100;
    let soma = ( 1+i)
    let math = Math.pow(soma , periodo);
    let montante = capital * math;
    let juros =  montante -capital ;
    let meses = periodo * 12;
    let parcela = montante /(meses)
    setResposta ( `O valor da montante é igual a ${montante.toFixed(2)}  , Juros igual á ${juros.toFixed(2)} e parcelas sao de ${parcela.toFixed(2)}`)
}


  return(
     <main className='acai'>
           <h1> Capital</h1>

           <div className='all'>

            <p>entrada</p>
            <input value={entrada} onChange={ e=>setEntrada (Number (e.target.value))}/>

              
            <p>empreendimento </p>
            <input  value={empreendimento} onChange={ e=>setEmpreendimento (Number (e.target.value))}/>

            <p>taxa</p>
            <input  value={taxa} onChange={ e=>setTaxa (Number(e.target.value))}/>
            

            <p>periodo</p>
            <input  value={periodo} onChange={ e=>setPeriodo (Number(e.target.value))}/>
              
           </div>

            <div>
              <p>O valor total a pagar e {Resposta}</p>
            </div>
            <button onClick={capital}>Calcular</button>
     </main>
  )
}
