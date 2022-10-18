import { useState } from 'react';
import './index.scss';

export default function Index (){ 

    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [result, setResult] = useState("");

    async function clickCalcular () {
    
        for (let i = 0; i < base; i++ ){
            for (let j = 1; j < altura; j++ ){
                setResult(result =>[...result, "*"])
            }

            setResult(result =>[...result, "*"])
       
    }   
}

    return (
        <>
            <h1>  </h1>
            <div className="form-salario">
                <div className='inputs'>
                <p>base</p>
                    <input value={base} onChange={ e=>setBase (Number (e.target.value))}/>

                            
                    <p>altura </p>
                    <input  value={altura} onChange={ e=>setAltura (Number (e.target.value))}/>
                
                </div>
                <button className='botao' onClick={clickCalcular}>
                    CALCULAR
                </button>
                <div>
                    {result}
                </div>
            </div>
            
        </>
    );
}  
