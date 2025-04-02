"use client"

import { createContext, ReactNode,useState} from "react";
import {api} from '@/services/api';
import { getCookieClient } from "@/lib/cookieClient";

interface OrderItemProps{
    id: string;
    amount: number;
    created_at: string;
    order_id: string;
    product_id: string;
    product:{
        id: string;
        name: string;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    };
    order:{
        id: string;
        table: string;
        name: string;
        draft: boolean;
        status: boolean
    }
}

type OrderContextData ={
    modalOpen: boolean,
    onOpenModal: ( order_id:string)=>void,
    onCloseModal: ()=>void
}

type OrderProviderProps ={
  children: ReactNode
}

export const OrderContext = createContext({  } as OrderContextData)


export function OrderProvider({children}:OrderProviderProps){
    const [modalOpen, setModalOpen] = useState(false)
    const [order, setOrder] =  useState <OrderItemProps[]>([])

     async function onOpenModal(orderId: string){
        const token = await getCookieClient()
        const response = await api.get("/orders/detail",{
            headers:{
                Authorization: `Bearer ${token}`
            },

            params:{
                order_id: orderId}
        }
            )
        setModalOpen(true)
        console.log(response.data)
    }
    function onCloseModal(){
        setModalOpen(false)
        console.log('close')
    }
    return(
        <OrderContext.Provider value={
            {modalOpen, 
            onOpenModal,
            onCloseModal}}>

            {children}
        </OrderContext.Provider>
    )
}