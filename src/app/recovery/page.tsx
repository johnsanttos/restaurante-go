import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";
import logoImg from "/public/logo.svg";

export default function Recovey(){
return (
  <>   
      <>
    <div className={styles.containerCenter}>
    <Image 
    src={logoImg} 
    alt="Logo  do restaurante" 
    className={styles.logo}
    />

    <section className={styles.login}>
      <h1>Recuperação de conta</h1>


   
    <form >
      <input 
      type='email' 
      required
      name='email'
      placeholder='Digite seu email'
      className={styles.input}
      />
    </form>

    <form >
    <input 
      type='password' 
      required
      name='password'
      placeholder='Informe a nova senha' 
      className={styles.input}
      />
    </form>


    <form>
      <input 
      type='password' 
      required
      name='password'
      placeholder='Confirme a nova senha' 
      className={styles.input}
      />

      

      <button 
      type='submit'
      className={styles.button}
      >Cadastrar</button>
      <Link href='/' className={styles.link}>
       Lembrou da senha? Faça login  </Link>
    </form>
  </section>

    </div>
   


  
    </>
</>
)
}