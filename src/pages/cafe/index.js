

import {useEffect, useState} from 'react'
import Cafe from '../../service/cafe';

export default function Index() {

  const [x, setX] = useState(0);
  const [total, setTotal] = useState(0);
  const [b, setB] = useState(0);
  


  const [Resposta,setResposta] = useState('');

  function resultadoclick (){
      const cal = Cafe(x , total ,b )  ;
      setResposta(cal)
      
  }
  

  return(
     <main className='acai'>
           <h1> QUERO Cafeeee</h1>

           <div className='all'>

            <p>Quantidade </p>
            <input value={x} onChange={ e=>setX (Number (e.target.value))}/>

              
            <p> .... </p>
            <input  value={total} onChange={ e=>setTotal (Number (e.target.value))}/>

            
            <p> ooooo </p>
            <input  value={b} onChange={ e=>setB (Number (e.target.value))}/>


           </div>

            <div>
              <p>O valor é igual a {Resposta}</p>
            </div>
            <button onClick={resultadoclick}>Calcular</button>
     </main>
  )
}
