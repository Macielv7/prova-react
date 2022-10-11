import { useState } from "react"

export default function Index() {
    const [capacidade, setCapacidade] = useState("");
    const [consumo, setConsumo] = useState("");
    const [distancia, setDistancia] = useState("");
    const [resultado, setResultado] = useState(0);

    async function calculoReal() {
        setResultado(Math.ceil((distancia/consumo)/capacidade));
    }

    return (
        <>
        <h1>CALCULAR TOTAL</h1>
        <div className="form-calcular">
            <div className='inputs'>
                <div>
                    <input type="text" placeholder='capac' value={capacidade} onChange={e => setCapacidade(Number(e.target.value))}/>
                </div>
                <div>
                    <input type="text" placeholder='Consumo' value={consumo} onChange={e => setConsumo(Number(e.target.value))}/>
                </div>
                <div>
                    <input type="text" placeholder='Dist' value={distancia} onChange={e => setDistancia(Number(e.target.value))}/>
                </div>
            </div>
            <button className='botao' onClick={calculoReal}>
                CALCULAR
            </button>
            <div>
                {resultado}
            </div>
        </div>

    </>
    );

}

