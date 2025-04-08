"use client"  

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react';
import { OrderContext } from '@/provider/order'

export function ModalOrder() {
  const { onCloseModal, order,finishOrder } = use(OrderContext)

  // Verifica se há pedidos antes de tentar acessar
  if (order.length === 0) return null;

   async function handleFinishOrder(){
    await finishOrder(order[0].id)
   }

  return(
    <dialog className={styles.dialogContainer}>
      <section className={styles.dialogContent}>
        <button 
          onClick={onCloseModal}
          className={styles.closeButton}>
          <X size={24} color='#ff3131'/>
        </button>

        <article className={styles.container}>
          <h2>Detalhe do pedido</h2>

          <span className={styles.table}>
            Mesa <b>{order[0].table}</b>
          </span>
          {
            order[0]?.name && (
              <span className={styles.name}>
                Cliente: <b>{order[0].name}</b>
              </span>
            )
          }

          {order[0].items.map(item => (
            <section className={styles.itemOrder} key={item.id}>
              <span>
                {item.amount} - <b>{item.product.name}</b>
              </span>
              <span className={styles.description}>{item.product.description}</span>
            </section>
          ))}

          <button className={styles.buttonFinish}
          onClick={handleFinishOrder}
          >
            <span>Finalizar pedido</span>
          </button>
        </article>
      </section>
    </dialog>
  )
}