import {useState, FormEvent} from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import styles from './style.module.scss'
import {setupAPIClient} from '../../services/api'
import { toast } from 'react-toastify'
import { canSSRAuth } from '../../utils/canSSRAuth'
import {Libras} from '../../components/Libras/Libras'


export default function Categoria() {
    const [categoria, setCategoria] = useState('')

    async function handleRegister(event: FormEvent){
        event.preventDefault();
        
        if(categoria === ''){
            return;
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/categoria',{
            categoria: categoria
            
        })

        toast.success('Categoria Cadastrada com sucesso')
        setCategoria('');
    }
    return (
        <>
            <Head>
                <title>Chave - Nova Entrada</title>
            </Head>
            <div>
                <Header />
                <Libras/>
                <main className={styles.container}>
                    <h1>Nova Categoria </h1>
                    <form className={styles.form} onSubmit={handleRegister}>
                        <input type="text" placeholder='Digite o nome da categoria' className={styles.input}
                        value={categoria}
                        onChange = {(e) => setCategoria(e.target.value)}
                        />

                        <button type="submit" className={styles.buttonAdd}>Cadastrar</button>
                    </form>



                </main>


            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})