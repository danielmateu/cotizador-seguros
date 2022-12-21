import { createContext, useState } from 'react'


const CotizadorContext = createContext();

function CotizadorProvider({ children }) {

    // const [modal, setModal] = useState(false);

    // const cambiarState = () => {
    //     setModal(!modal)
    // }

    return (
        <CotizadorContext.Provider
            value={{
                // modal,
                // cambiarState
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







