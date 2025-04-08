"use client"

import { createContext, ReactNode, useState } from "react";
import { api } from '@/services/api';
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    banner: string;
    created_at: string;
    updated_at: string;
    category_id: string;
}

interface OrderItem {
    id: string;
    amount: number;
    created_at: string;
    updated_at: string;
    order_id: string;
    product_id: string;
    product: Product;
}

interface Order {
    id: string;
    table: number;  // Note que na API é number, não string
    status: boolean;
    draft: boolean;
    name: string | null;
    created_at: string;
    updated_at: string;
    items: OrderItem[];  // Aqui estava o principal problema - na sua tipagem você não tinha o array items
}

type OrderContextData = {
    modalOpen: boolean;
    onOpenModal: (order_id: string) => Promise<void>;
    onCloseModal: () => void;
    finishOrder: (order_id: string) => Promise<void>;
    order: Order[];  // Agora é um array de Order, que contém o array items
}

type OrderProviderProps = {
    children: ReactNode
}

export const OrderContext = createContext({} as OrderContextData);

export function OrderProvider({ children }: OrderProviderProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [order, setOrder] = useState<Order[]>([]);
    const router = useRouter();

    async function onOpenModal(orderId: string) {
        const token = await getCookieClient();
        const response = await api.get("/orders/detail", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                order_id: orderId
            }
        });
        setOrder(response.data);
        setModalOpen(true);
    }

    function onCloseModal() {
        setModalOpen(false);
        console.log('close');
    }

    async function finishOrder(order_id: string) {
        console.log('aii apapapap',order_id);
        const token = await getCookieClient();
       const data ={
        order_id: order_id
       }

       try {
        await api.put("/order/finish", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
       
       } catch (error) {
        toast.error("Erro ao finalizar o pedido!")
        console.log(error);
        return
       }

       toast.success("Pedido finalizado com sucesso!")
       router.refresh();
        setModalOpen(false);
    }


    return (
        <OrderContext.Provider value={{
            modalOpen,
            onOpenModal,
            onCloseModal,
            order,
            finishOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}