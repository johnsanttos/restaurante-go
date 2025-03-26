"use client"

import { createContext, ReactNode,useState} from "react"

type OrderContextData ={
    modalOpen: boolean,
    onOpenModal: ()=>void,
    onCloseModal: ()=>void
}

type OrderProviderProps ={
  children: ReactNode
}

export const OrderContext = createContext({  } as OrderContextData)

export function OrderProvider({children}:OrderProviderProps){
    const [modalOpen, setModalOpen] = useState(false)
    function onOpenModal(){
        setModalOpen(true)
        console.log('open')
    }
    function onCloseModal(){
        setModalOpen(false)
        console.log('close')
    }
    return(
        <OrderContext.Provider value={{modalOpen:false, onOpenModal,onCloseModal}}>
            {children}
        </OrderContext.Provider>
    )
}