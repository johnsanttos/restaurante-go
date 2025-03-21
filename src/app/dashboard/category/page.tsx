
import { headers } from 'next/headers'
import { Button } from '../components/button'
import styles from './styles.module.scss'
import {api} from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer'
import { redirect } from 'next/navigation'
export default function Category () {

    async function handleRegisterCattegory(formData:FormData){
        'use server'
        const name =  formData.get('name')

        if(!name){
            return
        }

        const data ={
            name:name
        }

        const token = await getCookieServer()
       
           const response = await api.post('/category', data ,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

            .catch((err) =>{
                console.log(err)
                return
            })

   redirect('/dashboard')
    }

    return (
        <main className= {styles.container}>
            <h1>Nova Categoria</h1>

            <form className={styles.form}
            action={handleRegisterCattegory}
            >
                <input
                type='text'
                name='name'
                placeholder='Nome da categoria, ex: Pizzas'
                required
                className={styles.input}
                />
            <Button
            name='Cadastrar categoria'
            />
         
            </form>
        </main>
    )
}