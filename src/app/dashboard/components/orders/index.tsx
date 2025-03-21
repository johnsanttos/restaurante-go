
import styles from './styles.module.scss'
import { RefreshCcw} from 'lucide-react'
export function Orders(){
    return(
        <main className={styles.container}>
            <section className={styles.containerHeader}>
                <h1> Ùltimos pedidos</h1>
                <button>
                <RefreshCcw size={24} color='#3fffa3'/>
                </button>

            </section>

            <section className={styles.listOrders}>
                <button
                className={styles.orderItem}
                >
                    <div className={styles.tag}></div>
                    <span> Mesa 10</span>


                </button>

                <button
                className={styles.orderItem}
                >
                    <div className={styles.tag}></div>
                    <span> Mesa 69</span>


                </button>

            </section>
        </main>
    )
}
