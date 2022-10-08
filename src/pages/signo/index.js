import './index.scss';

import {useEffect, useState} from 'react'
import signo from '../../service/signo';

export default function Index() {

  const [Mes, setMes] = useState('');
  const [Dia, setDia] = useState('');

  const [Resposta,setResposta] = useState('');

  function resultadoclick (){
      const cal = signo (Mes , Dia )  ;
      setResposta(cal)
  }
  

  return(
     <main className='acai'>
           <h1> Signo</h1>

           <div className='all'>

            <p>
            mes
            </p>
            <input value={Mes} onChange={ e=> setMes  (e.target.value)}/>

              
            <p>dia </p>
            <input  value={Dia} onChange={ e=>setDia  (e.target.value)}/>


           </div>

            <div>
              <p>seu signo e libra? {Resposta}</p>
            </div>
            <button onClick={resultadoclick}>Consultar</button>

         
     </main>
  )
}