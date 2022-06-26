import Head from 'next/head'
import { Header } from '../../components/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'
import styles from  './styles.module.scss'
import {setupAPIClient} from '../../services/api'
import { FormEvent, useState } from 'react'
import {toast} from 'react-toastify'
import {RiDeleteBin6Line} from 'react-icons/ri'



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

export default function Listarprodutos({produtList}:prodProps){
  console.log(produtList);
  const [produtos, setProdutos]=useState(produtList || []);

    return(
        <>
            <Head>
                <title>CHAVE - Listar</title>
            </Head>
            <div className={styles.tudo}>
                <Header/>


                <main className={styles.container}>
                <h1>Nova entrada de produto</h1>
               
                 <article className={styles.article}>
                      <table className={styles.table}>
                        <thead>
                          <tr className={styles.tr}>
                            <th className={styles.th}>Produto</th>
                            <th className={styles.th}>Quantidade</th>
                            <th className={styles.th}>Descrição</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                      {produtos.map( item=> (
                        (<tr className={styles.tr} key={item.id_produto}>
                          <td className={styles.td}>
                            {item.nome_produto}
                          </td>
                          <td className={styles.td}>
                          {item.quantidade}
                        </td>
                        <td className={styles.td}>
                          {item.description}
                        </td>
                        </tr>
                        )
                      )
                      
                      
                      )}
                     
                       </tbody>
                       </table>
                       </article> 


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

