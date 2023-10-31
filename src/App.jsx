import { useState } from "react"

function App() {

  const [idade, setIdade] = useState(52)
  const [cor, setCor] = useState("azul");


  function atualizarEstado() {
    setIdade(9)
  }
  return (
    <div>
      <h1>a cor é {cor}!</h1>
      <button
        type="button"
        onClick={() => setCor("azul")}
      >azul</button>
      <button
        type="button"
        onClick={() => setCor("vermelho")}
      >vermelho</button>
      <button
        type="button"
        onClick={() => setCor("branco")}
      >branco</button>
      <button
        type="button"
        onClick={() => setCor("verde")}
      >verde</button>

    </div>
  )
}

export default App
