import { useState } from 'react';
import './index.scss';

export default function Index () {

    const [linha, setLinha] = useState(0);
    const [result, setResult] = useState("");


    async function clickCalcular () {
        for (let i = 0; i < linha; i++ );
        setResult(result =>[...result,"*", ])
    }

    return (
        <>
            <h1>CALCULAR LINHA</h1>
            <div className="form-salario">
                <div className='inputs'> 

                    <div>
                        <input type="text" placeholder='Salario' value={linha} onChange={e => setLinha(Number(e.target.value))}/>
                    </div>
                    
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