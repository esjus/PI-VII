import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'
import styles from './style.module.scss'
import {setupAPIClient} from '../../services/api'
import { FormEvent, useState } from 'react'
import {toast} from 'react-toastify'





type ItemProps = {
  id_produto: string,
  nome_produto: string,
  quantidade: number,
  description: string
  nova_quantidade: number,
}

interface prodProps{
  produtList: ItemProps[];
}

export default function DeleteItem({produtList}:prodProps){
  console.log(produtList);

  const [nova_quantidade, setQuantidade] = useState('')

  const [produtos, setProdutos]=useState(produtList || []);
  const [prodSelected, setProdSelectd] = useState(0)
 
  function handleProduto(event){
    setProdSelectd(event.target.value)
  }

 async function pHandleRegister(id_produto){
      
      try{
  
        const apiClient = setupAPIClient();

        await apiClient.delete('/product',{
          params:{
            id_produto: produtos[prodSelected].id_produto
          }

      }) 

        toast.success('Entrada apagada com sucesso!')
        await apiClient.get('/product')
    }
      catch(err){
        console.log(err);
        toast.error("Erro ao Deletar!")
      }

      setQuantidade('')
 }



    return(
        <>
            <Head>
                <title>CHAVE - Nova entrada</title>
            </Head>
            <div>
                <Header/>
               


                <main className={styles.container}>
                <h1>Deletar Produto</h1>
                <form className={styles.form} onSubmit={pHandleRegister}>
                    <select value={prodSelected} onChange={handleProduto}>
                      {produtos.map((item, index)=>{
                        return(
                          <option key={item.id_produto} value={index}>
                            {item.nome_produto}
                          </option>
                        )
                      }
                      
                      
                      )}
                       
                    </select>

                  

                   <button className={styles.buttonAdd} type="submit">
                       Deletar
                   </button><br></br>
                   <button className={styles.buttonAdd}>
                   <Link href='/dashboard'>
                        <a>Voltar</a>
                    </Link>
                   </button>

                  

                </form>





                </main>


            </div>
        </>

    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=> {
  const apliClient = setupAPIClient(ctx)

  const response = await apliClient.get('/product')

  //console.log(response.data);

    return{
        props: {
          produtList: response.data
        }
    }
})

