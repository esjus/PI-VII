import {FormEvent, useState, useContext} from 'react'
import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import Image from 'next/image'
import { Input } from '../../components/ui/input/index'
import { Button } from '../../components/ui/Button'
import Link from 'next/link'
import imagem1log from '../../../public/imagem1log.png'
import logoImg from '../../../public/logo.png'
import {AuthContext} from '../../contexts/AuthContext'
import {toast} from 'react-toastify'
import {Nav} from '../../components/ui/nav/Nav'
import {Footer} from '../../components/ui/footer/Footer'




export default function SignUp() {
    const {signUp} = useContext(AuthContext)
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[loading, setLoading] = useState(false)

   async function handleSignUp(event: FormEvent){
        event.preventDefault();

        if(nome === '' || email === '' || senha === ''){
            toast.error("PREENCHA TODOS OS CAMPOS.");
            
            return;
        }

        setLoading(true);

        let data = {
            nome,
            email,
            senha
        }

        await signUp(data);

        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>Cadastro - Sistema CHAVE</title>
                <link rel="icon" href="/favicon.ico" />   
            </Head>
            <div className={styles.alinhamento}>
            <Nav/>
         
            <div className={styles.containerCenter}>
          

                <div className={styles.login}>
                <div className={styles.divimg}><Image src={logoImg} alt="Logo" width="350px" height="100px"/></div>
                    <h1>Criando sua conta</h1>
                    <form onSubmit={handleSignUp}>
                        <Input placeholder="Digite seu nome" type="text" 
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}/>

                        <Input placeholder="Digite seu email" type="text" value={email}
                        onChange={(e)=> setEmail(e.target.value)}/>

                        <Input placeholder="Digite sua senha" type="password" value={senha}
                        onChange={(e)=> setSenha(e.target.value)}/>

                        <Button type="submit" loading={loading}>
                            Cadastrar</Button>
                    </form>

                    <Link href="/login"><a className={styles.text}>Já possui uma conta? Faça login.</a></Link>



                </div>

                <div className={styles.imagem}>
                    <Image src={imagem1log} alt="ilustrativa" />
                </div>
            </div>

            </div>
            <Footer/>
        </>
    )
}

