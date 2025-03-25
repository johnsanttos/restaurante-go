import { Form } from "./components/form";
import {api} from '@/services/api'
import { getCookieServer } from '@/lib/cookieServer';

export default async function Product () {

    const token = await getCookieServer()

    console.log('Token:', token) // Verifique se o token está correto


    
    const response = await api.get('/category', {

        headers:{
            Authorization: `Bearer ${token}`
        }
    })

    console.log(response.data)

    return (
        <main>
        <Form categories = { response.data}/>
        </main>
    )
}