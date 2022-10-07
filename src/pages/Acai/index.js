import './index.scss';

import {useEffect, useState} from 'react'
import acai from '../../service/acai';

export default function Index() {

  const [qtdPeq, setqtdPeq] = useState(0);
  const [qtdMed, setqtdMed] = useState(0);
  const [desconto, setDesconto] = useState(0);
  const [qtdGra, setqtdGra] = useState(0);

  const [Resposta,setResposta] = useState('');

  function resultadoclick (){
      const cal = acai(qtdMed , qtdPeq , qtdGra , desconto)  ;
      setResposta(cal)
      
  }
  

  return(
     <main className='acai'>
           <h1> Venda de acai</h1>

           <div className='all'>

            <p>Quantidade de pequeno</p>
            <input value={qtdPeq} onChange={ e=>setqtdPeq (Number (e.target.value))}/>

              
            <p>Quantidade de Medio </p>
            <input  value={qtdMed} onChange={ e=>setqtdMed (Number (e.target.value))}/>

            <p>Quantidade de Grande</p>
            <input  value={qtdGra} onChange={ e=>setqtdGra (Number (e.target.value))}/>

            <p>desconto</p>
            <input  value={desconto} onChange={ e=>setDesconto (Number (e.target.value))}/>
              
           </div>

            <div>
              <p>O valor é igual a {Resposta}</p>
            </div>
            <button onClick={resultadoclick}>aaaaaaaaaaaaaaaaaa</button>
     </main>
  )
}
