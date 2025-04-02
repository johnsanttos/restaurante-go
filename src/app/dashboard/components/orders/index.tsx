"use client"

import { OrderProps } from '@/lib/order.type'
import styles from './styles.module.scss'
import { Import, RefreshCcw} from 'lucide-react'
import { ModalOrder } from '../modal'
import {use} from 'react'
import { OrderContext } from '@/provider/order'

interface Props{
    orders: OrderProps[]
}
export function Orders({orders}:Props){
    const {modalOpen,onOpenModal }= use(OrderContext)

function handleDetailOrder( order_id: string){
    onOpenModal( order_id)
}
    return(
        <>
        <main className={styles.container}>
            <section className={styles.containerHeader}>
                <h1> Ùltimos pedidos</h1>
                <button>
                <RefreshCcw size={24} color='#3fffa3'/>
                </button>

            </section>

            <section className={styles.listOrders}>
         {
            orders.map(order=>(
                <button
                key={order.id}
                onClick={() => handleDetailOrder (order.id)}
                className={styles.orderItem}
                >
                    <div className={styles.tag}></div>
                    <span> Mesa {order.table}</span>


                </button>

            )

            )
         }
        
              

            </section>
        </main>
        {
            modalOpen && <ModalOrder/>
         }
        </>
    )
}
