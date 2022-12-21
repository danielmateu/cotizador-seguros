import { createContext, useState } from 'react'


const CotizadorContext = createContext();

function CotizadorProvider({ children }){

const [modal, setModal] = useState(false);

    return (
        <CotizadorContext.Provider
            value={{
                modal,
                setModal
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







