import { useState } from "react"

export default function Index(){

    function resulClick(){
        for(let i= inicio; i <= fim; i++)
        setresposta(resposta =>[...resposta , i ])
    }

    const [inicio, setInicio] = useState(0)
    const [fim, setFim] = useState(0)
    const [resposta, setresposta] = useState("")

    return(
        <main>
            <section>
                <div>

                    <p>inicio</p>
                    <input value={inicio} onChange={ e=>setInicio (Number (e.target.value))}/>

                            
                    <p>fim </p>
                    <input  value={fim} onChange={ e=>setFim (Number (e.target.value))}/>


                    <button onClick={resulClick}>Calcular</button>

                    <div>
                        <p><br/> {resposta}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

