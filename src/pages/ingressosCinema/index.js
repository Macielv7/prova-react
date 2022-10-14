import './index.scss';

import {useEffect, useState} from 'react'
import ingressosCinema from '../../service/ingressosCinema';

export default function Index() {

  const [qtdPeq, setqtdPeq] = useState(0);
  const [qtdInteiras, setqtdInteiras] = useState(0);
  const [dia, setDia] = useState(0);
  const [pais, setPais] = useState(0);

  const [Resposta,setResposta] = useState('');

  function resultadoclick (){
      const cal = ingressosCinema( qtdInteiras, qtdPeq , dia , pais)  ;
      setResposta(cal)
      
  }
  

  return(
     <main className='acai'>
           <h1> Compra de inglessos</h1>

           <div className='all'>

            <p>inteira</p>
            <input value={qtdPeq} onChange={ e=>setqtdPeq (Number (e.target.value))}/>

              
            <p>Media </p>
            <input  value={qtdInteiras} onChange={ e=>setqtdInteiras (Number (e.target.value))}/>

            <p>dia</p>
            <input  value={dia} onChange={ e=>setDia ((e.target.value))}/>
            

            <p>nacional</p>
            <input  value={pais} onChange={ e=>setPais ( (e.target.value))}/>
              
           </div>

            <div>
              <p>O valor total a pagar e {Resposta}</p>
            </div>
            <button onClick={resultadoclick}>Calcular</button>
     </main>
  )
}
