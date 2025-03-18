import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from '/public/Logo.svg'

export function Header() {
  return (
    <header className= {styles.headerContainer}>
       <div className= {styles.headerContent}>
        <Link href={'/dashboard'}>
        <Image
        alt='Logo site'
        src ={logoImg}
        width={220}
        height={90}
        priority={true}
        quality={100}
        />
        
        </Link>

        <nav>
            <Link href={'/dashboard/category'}>
            Categoria
            </Link>

            <Link href={'/dashboard/product'}>
            Produtos
            </Link>

        </nav>

       </div>
    </header>
  )
}