import { useState } from "react"
import "./index.scss"

export default function Index() {
    const [temperatura, setTemperatura] = useState("");
    const [termometro, setTermometro] = useState("");

    async function calculoReal() {
        switch(true) {
            case temperatura < 36:
                setTermometro("Hipotermia")
                break;
            case temperatura >= 36 && temperatura < 37.5:
                setTermometro("Normal")
                break;
            case temperatura >= 37.6 && temperatura < 39.6:
                setTermometro("Febre")
                break;
            case temperatura >= 39.5 && temperatura < 41:
                setTermometro("Febre alta")
                break;
            case temperatura >= 41:
                setTermometro("Hipertermia")
                break;
            default: 
                break;
        }
    }

    return(
        <div style={{"display": "flex", "flexDirection": "column", "width": "20em", "justifyContent": "center"}}>
            <input type="text" value={temperatura} placeholder="Insira sua temperatura" onChange={(e) => setTemperatura(Number(e.target.value))}></input>
            <button onClick={() => calculoReal()}>Clique!</button>
            <h1>{termometro}</h1>
        </div>
    )
}

