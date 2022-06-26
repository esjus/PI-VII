import Link from 'next/link'
import styles from './styles.module.scss'
import logo from '../../../../public/logo.png'
import Image from 'next/image'


export function Nav(){
    return(
       <>
       <nav className={styles.nav}>
       <Link href="/"><span className={styles.posicao}><Image src={logo} alt="Logo" width="175px" height="50px"/></span></Link>
       <Link href="/"><a className={styles.item}>Home</a></Link>
       <Link href="/login"><a className={styles.item}>Login</a></Link>
       <Link href="/signup"><a className={styles.item}>Cadastre-se</a></Link>
       

       </nav>
       
       </>
    )
}