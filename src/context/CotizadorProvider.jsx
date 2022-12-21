import { createContext, useState } from 'react'


const CotizadorContext = createContext();

function CotizadorProvider({ children }) {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {
        // console.log('Cotizando...')

        //Una base

        //Obtener Diferencia de años

        //Hay que restar el 3% cada año

        //Americano 15% más
        //Europeo 30%
        // Asiatico 5%

        // Plan básico 20%
        // Plan completo 50%
    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext;







