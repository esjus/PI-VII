import {useContext, FormEvent, useState} from 'react'
import Head from 'next/head'

import styles from '../../../styles/Home.module.scss'
import Image from 'next/image'
import {Input} from '../../components/ui/input/index'
import { Button } from '../../components/ui/Button'
import {AuthContext} from '../../contexts/AuthContext'
import Link from 'next/link'

import imagem1log from '../../../public/imagem1log.png'

import logoImg from '../../../public/logo.png'
import {Nav} from '../../components/ui/nav/Nav'

import {toast} from 'react-toastify'

import {canSSRGuet} from '../../utils/canSSRGuet'
import {Libras} from '../../components/Libras/Libras'

export default function Login() {
const {signIn} = useContext(AuthContext)

const [email, setEmail] = useState('');

const [senha, setSenha] = useState('');

const [loading, setLoading] = useState(false)

async function handleLogin(event: FormEvent) {
  event.preventDefault();

  if(email === '' || senha === '' ){
   toast.warning("Preencha todos os dados.")
    return;
  }

  setLoading(true);

  let data = {
    email,
    senha
  }

  await signIn(data)

  setLoading(false);

}

  return (
   <>
    <Head>
      <title>Sistema CHAVE</title>
    </Head>
    <Libras/>
    <Nav/>
    
    <div className={styles.containerCenter}>
    <div className={styles.login}>
    <div className={styles.divimg}><Image src={logoImg} alt="Logo"/></div>
    <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input placeholder="Digite seu email" type="text" value={email} onChange={ (e) => setEmail(e.target.value)}/>

        <Input placeholder="Digite sua senha" type="password" value={senha} onChange={ (e) => setSenha(e.target.value)}/>

        <Button type="submit" loading={loading}>
          Acessar</Button>
      </form>

      <Link href="/signup"><a className={styles.text}>Não possui uma conta? Cadastre-se</a></Link>

     



    </div>

    <div className={styles.imagem}>
      <Image src={imagem1log} alt="ilustrativa"/>
      </div>
     
    </div>
   
   
   </>
  )
}

export const getServerSideProps = canSSRGuet(async (ctx)=>{
  return{
    props: {}
  }
})