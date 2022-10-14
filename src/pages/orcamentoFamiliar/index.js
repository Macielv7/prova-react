import './index.scss';

import {useEffect, useState} from 'react'
import OrcamentoFamiliar from '../../service/orcamentoFamiliar';

export default function Index() {

  const [ganhos, setGanhos] = useState(0);
  const [gastos, setGastos] = useState(0);
 
  const [Resposta,setResposta] = useState('');

  function resultadoclick (){
      const cal = OrcamentoFamiliar( ganhos , gastos)  ;
      setResposta(cal)
      
  }
  

  return(
     <main className='Gastos'>
           <h1> orçamento familia </h1>

           <div className='all'>

            <p>no</p>
            <input value={ganhos} onChange={ e=>setGanhos (Number (e.target.value))}/>

            <p>ueno</p>
            <input value={gastos} onChange={ e=>setGastos (Number (e.target.value))}/>
              
           
              
           </div>

            <div>
              <p>O orçamento {Resposta}</p>
            </div>
            <button onClick={resultadoclick}>Calcular</button>
     </main>
  )
}
