import { createContext, useState } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinaro } from '../helpers';


const CotizadorContext = createContext();

function CotizadorProvider({ children }) {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () => {

        //Una base
        let resultado = 2000;
        //Obtener Diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        
        //Hay que restar el 3% cada año
        resultado -= ((diferencia * 3) * resultado) / 100;
        
        //Americano 15% más
        //Europeo 30%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        
        // Plan básico 20%
        // Plan completo 50%
        resultado *= calcularPlan(datos.plan);
        
        //Formatear dinero
        resultado = formatearDinaro(resultado);

        setResultado(resultado);
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







