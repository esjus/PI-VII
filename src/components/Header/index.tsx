import { useContext } from 'react'
import styles from './style.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext, signOut } from '../../contexts/AuthContext'
import Image from 'next/image'

export function Header() {

    const { signOut } = useContext(AuthContext);

    return (
        <header className={styles.headerContainer}>

            <div className={styles.headerContent}>

                


                <nav className={styles.menuNav}>
                <Link href='/dashboard'>
                    <Image src="/logo.png" width={190} height={60} />
                </Link>
                    <Link href='/dashboard'>
                        <a>Início</a>
                    </Link>
                    <Link href="/categoria">
                        <a>Nova Categoria</a>
                    </Link>
                    <Link href="/produto">
                        <a>Novo produto</a>
                    </Link>
                    <Link href="/entradaitem">
                        <a>Entrada de produto</a>
                    </Link>
                    <Link href="/saidaitem">
                        <a>Saída de produto</a>
                    </Link>
                    <Link href="/deleteitem">
                        <a>Deletar Produto</a>
                    </Link>



                    <button onClick={signOut}><FiLogOut color="#FFF" size={24} /></button>
                </nav>
            </div>

        </header>

    )
}