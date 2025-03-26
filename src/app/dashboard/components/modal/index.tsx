import styles from './styles.module.scss'
import{X} from 'lucide-react'

export function ModalOrder() {
  return(
    <dialog
    className={styles.dialogContainer}
    >
      <section className={styles.dialogContent}>
    
        <button className={styles.closeButton}>
          <X size={24} color='#ff3131'/>
            
            </button>

            <article className={styles.container}>
                <h2 > Detalhe do pedido </h2>

                <span className = {styles.table}>
                Mesa <b> 36 </b>
                </span>

                <section className={styles.itemOrder}>
                    <span >
                        1 -
                        <b> Pizza de Calabresa </b>
                 
                    </span>
                    <span  className={styles.description} >Pizza de Calabresa, borda recheada</span>

                 
                </section>

                <section className={styles.itemOrder}>
                    <span >
                        1 -
                        <b> Pizza de Calabresa </b>
                 
                    </span>
                    <span  className={styles.description} >Pizza de Calabresa, borda recheada</span>

                 
                </section>
                    <button className={styles.buttonFinish}>
                        <span> Finalizar pedido </span>
                    </button>

            </article>

        </section>
    </dialog>
  )
}