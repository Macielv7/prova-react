import { useState } from 'react';
import './index.scss';

export default function Index () {

    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [result, setResult] = useState(0);

    async function clickCalcular () {
        let b = (salario*bonus)/ 100
        let y = b+salario
        let x = y - desconto
        setResult(x)
    }

    return (
        <>
            <h1>SALARIO LIQUIDO</h1>
            <div className="form-salario">
                <div className='inputs'>
                    <div>
                        <input type="text" placeholder='Salario' value={salario} onChange={e => setSalario(Number(e.target.value))}/>
                    </div>
                    <div>
                        <input type="text" placeholder='Bonus' value={bonus} onChange={e => setBonus(Number(e.target.value))}/>
                    </div>
                    <div>
                        <input type="text" placeholder='Desconto' value={desconto} onChange={e => setDesconto(Number(e.target.value))}/>
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