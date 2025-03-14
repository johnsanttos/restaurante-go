import styles from './page.module.scss';
import Image from "next/image";
import logoImg from "/public/logo.svg";
import Link from 'next/link';

export default function Home() {

  return (
    <>
    <div className={styles.containerCenter}>
    <Image 
    src={logoImg} 
    alt="Logo  do restaurante" 
    className={styles.logo}
    />

    <section className={styles.login}>
    <form >
      <input 
      type='email' 
      required
      name='email'
      placeholder='Digite seu email'
      className={styles.input}
      />
    </form>

    <form>
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
  </section>

    </div>
   


  
    </>

  
  );

 
}
