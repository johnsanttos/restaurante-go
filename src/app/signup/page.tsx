
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";
import logoImg from "/public/logos.svg";
import{api} from '@/services/api'
import { redirect } from "next/navigation";

export default function Signup(){

  async function handleRegister(formData:FormData){
  "use server"

    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if(!name || !email || !password){
      console.log('Preencha todos os campos')
      return
    }

    try{
      await api.post('/users', {
        name,
        email,
        password
      }) 
   
    
  } catch (err){
    console.log('Erro ao cadastrar o usuário')
    console.log(err)
  }
  redirect('/')
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
      <h1>Criando sua conta</h1>


      <form action={handleRegister} >
      <input 
      type='text' 
      name='name'
      placeholder='Digite seu nome'
      className={styles.input}
      />
   


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
      className={styles.button}>
        Cadastrar
      </button>
    

    </form>


    <Link href='/' className={styles.link}>
    Já possui uma conta? Faça login  </Link>
  </section>

    </div>
   
    </>
)
}