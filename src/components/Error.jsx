import useCotizador from "../hooks/useCotizador"



export const Error = () => {

    const { error } = useCotizador()

    return (
        <div className="rounded border text-center border-red-400 bg-red-200 text-red-700 p-4">
            {error}
        </div>
    )
}
