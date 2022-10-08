
import {useState} from 'react'
import sorvete from '../../service/sorveteria';

export default function Index() {

  const [gramas , setGramas] = useState(0);
  const [respostas, setResposta] = useState('');


  function Valor (){
      const resp = sorvete(gramas)  ;
      setResposta(resp)
      
  }
  

  return(
     <main className='acai'>
           <h1> Sorveteria</h1>

           <div className='all'>
            <p>gramas</p>
            <input  value={gramas} onChange={ e=>setGramas (Number (e.target.value))}/>
           </div>

            <div>
              <p> {respostas}</p>
            </div>

            <button onClick={Valor}>Calcular</button>

     </main>
  )
}
