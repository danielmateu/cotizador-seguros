import { Fragment } from "react"
import { MARCAS, PLANES, YEARS } from "../constants"
import useCotizador from "../hooks/useCotizador"
import { Error } from "./Error";
// import CotizadorContext from "../context/CotizadorProvider"


export const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        //TODO Cotizar
        cotizarSeguro()

    }

    return (
        <>
            {error && <Error/>}
            <form
                action=""
                className="form"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select
                        name="marca"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}

                    >
                        <option value="">--Seleciona Marca--</option>

                        {MARCAS.map(marca => (
                            <option
                                value={marca.id}
                                key={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select
                        name="year"
                        id=""
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value="">--Seleciona Año--</option>

                        {YEARS.map(year => (
                            <option
                                value={year}
                                key={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un plan
                    </label>

                    <div className="flex gap-3 item-center">
                        {
                            PLANES.map(plan => (
                                <Fragment key={plan.id}>
                                    <label htmlFor="">
                                        {plan.nombre}
                                    </label>
                                    <input
                                        type="radio"
                                        name="plan"
                                        value={plan.id}
                                        onChange={e => handleChangeDatos(e)}

                                    />
                                </Fragment>
                            ))
                        }
                    </div>
                </div>

                <input type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-400 transition-all text-white hover:text-gray-800 hover:font-bold cursor-pointer p-3 rounded-xl"
                    value='Cotizar'
                />
            </form>

        </>
    )
}
