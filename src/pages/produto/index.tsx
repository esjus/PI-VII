import Head from 'next/head'
import { Header } from '../../components/Header'
import { canSSRAuth } from '../../utils/canSSRAuth'
import styles from './style.module.scss'
import {setupAPIClient} from '../../services/api'
import { useState, FormEvent } from 'react'
import {toast} from 'react-toastify'
import {Footer} from '../../components/ui/footer/Footer'




type ItemProps = {
  id_cat: string;
  categoria: string;
}

interface CategoryProps{
  categoryList: ItemProps[];
}


export default function Produto({categoryList}: CategoryProps){

const [nome_produto, setNome_produto] = useState('');
const [quantidade, setQuantidade] = useState('');
const [description, setDescription] = useState('')


 const [categories, setCategories] = useState(categoryList || [])
const [categorySelected, setCategorySelected] = useState(0)

function handleChangeCategory(event){
    setCategorySelected(event.target.value)
}

async function handleRegister(event: FormEvent){
  event.preventDefault();

  const quantidadeC = parseInt(quantidade)

  try{
    
    if(nome_produto === '' || quantidade === '' || description === ''){
      toast.error("Preencha todos os campos.")
      return;
    }

    
    const apiClient = setupAPIClient();

    await apiClient.post('/product',{

      nome_produto: nome_produto,
      quantidade: quantidadeC,
      description: description,
      categoria_id: categories[categorySelected].id_cat

    })

    toast.success('Cadastrado com sucesso!')

  } catch(err){
    console.log(err);
    toast.error("Ops... erro ao cadastrar.")
  }

  setNome_produto('');
  setQuantidade('');
  setDescription('');
  
}
    return(
        <>
            <Head>
                <title>CHAVE - Novo Produto</title>
            </Head>
            <div>
                <Header/>
                

                <main className={styles.container}>
                <h1>Novo Produto</h1>
                <form className={styles.form} onSubmit={handleRegister}>
                <select value={categorySelected} onChange={handleChangeCategory}>
                      {categories.map((item, index)=>{
                      return(
                        <option key={item.id_cat} value={index}>
                          {item.categoria}
                        </option>
                      )
                      })}
                    </select>

                    <input
                    type="text" 
                    placeholder="Digite o nome do produto"
                    className={styles.input} value={nome_produto} onChange={(e) => setNome_produto(e.target.value)}/>

                    <input
                    type="number" 
                    placeholder="Digite a quantidade do produto"  className={styles.input} value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>

                   <textarea
                   placeholder='Descreva o produto'  className={styles.input}
                   value={description} onChange={(e) => setDescription(e.target.value)}/>

                   <button className={styles.buttonAdd} type="submit">
                        Cadastrar
                   </button>

                  

                </form>





                </main>


            </div>
            <Footer/>
        </>

    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=> {
  const apliClient = setupAPIClient(ctx);
  const response = await apliClient.get('/categoria')

  console.log(response.data)

    return{
        props: {
          categoryList: response.data
        }
    }
})