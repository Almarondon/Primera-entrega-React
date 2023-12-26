import { useState } from 'react'

const useCounter = (valorInicial = 0, paso = 1) => {
    const [contador, setContador] = useState(valorInicial)

    const suma = () => {
        if (contador < 10) {
            setContador((prevCount) => prevCount + paso)
        }
    }

    const resta = () => {
        if (contador > 0) {
            setContador((prevCount) => prevCount - paso)
        }
    }

    return {
        contador,
        suma,
        resta
    }
}

export default useCounter