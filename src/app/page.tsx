import styles from './page.module.scss';
import Image from "next/image";
import logoImg from "/public/logo.svg";
import Link from 'next/link';
import { api } from '@/services/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function Home() {


  async function handleLogin(formData:FormData){
    "use server"
    const email = formData.get("email") 
    const password = formData.get("password") 

    if(!email || !password){  
       return; 
       } 

   try {
    const response = await api.post('/login', {
   email,
   password
      
    })

    if(!response.data.token ){    
      return
    }
    console.log(response.data)

const expresTime= 60 * 60 * 24 * 1000

const cookieStore =await cookies()
cookieStore.set('login', response.data.token,{
      maxAge: expresTime,
      path: '/',
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
    })

   } catch (error) {
     console.log(error)
     return
   }

   redirect('/dashboard')
    
  }

  return (
    <>
    
    <div className={styles.containerCenter}>
    <Image 
    src={logoImg} 
    alt="Logo  do restaurante" 
    className={styles.logo}
    />

    <section className={styles.login}>
    <form  action={handleLogin}>
      <input 
      type='email' 
      required
      name='email'
      placeholder='Digite seu email'
      className={styles.input}
      />
    

    
      <input 
      type='password' 
      required
      name='password'
      placeholder='********' 
      className={styles.input}
      />

      <button 
      type='submit'
      className={styles.button}
      >Entrar</button>
      <Link href='/signup' className={styles.link}>
       Não possui uma conta? Cadastre-se  </Link>
    </form>

    <Link href='/recovery' className={styles.reset}>
Esqueceu a senha?  </Link>
  </section>

    </div>
   


  
    </>

  
  );

 
}
