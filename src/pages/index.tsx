import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import logoImg from '../../public/logo.png'
import {Nav} from '../components/ui/nav/Nav'
import {Libras} from '../components/Libras/Libras'
import {Footer} from '../components/ui/footer/Footer'





export default function Home() {
  return (
    <>
      <Head>
        <title>teste</title>
      </Head>
      <Libras/>
     
      
       <Nav/>
       
       
        <main className={styles.main}>
        

   
     

          <h1>Sistema para controle de estoque online</h1>
          <p>O CHAVE é o sistema mais fácil e completo para você monitorar o estoque da sua escola. Organize produtos, lance saídas, crie um controle online para o registro de mercadorias. Faça tudo isso e muito mais com o nosso sistema de controle de estoque online!</p>

          <div className={styles.classbutton}>
          <Link href="/login"><button className={styles.clbutton}>ACESSAR</button></Link></div>






          <h1>Importância do controle de estoque</h1>
          <p>Controle de estoque consiste em realizar a gestão de mercadorias de uma empresa. Em outras palavras, registrar o fluxo de entrada e saída de artigos para viabilizar condições que otimizem o seu uso eficiente e minimizem a necessidade de investimento de capital. Daí a importância do controle de estoque ser tão grande.</p>

          <p>Um rigoroso controle desse processo de gestão é fundamental para potencializar uma organização e reforçar a sua estrutura de negócio.</p>

          <p>Apesar disso, ainda o controle de estoque é ignorado em muitas escolas pelo simples desconhecimento dos princípios básicos de uma boa administração.</p>

          <h1>O que é controle de estoque</h1>
          <p>O controle de estoque é o processo de monitoramento de todo fluxo de entrada e saída de produtos armazenados, para garantir um bom funcionamento de todas as operações que dependem, direta e indiretamente, dessas mercadorias.</p>

          <p>Esse controle deve ser feito com planejamento sério e muita organização, já que quando bem implantado, garante eficiência para sustentar o negócio e reduz custos e perdas.</p>

          <p>Em outras palavras, é possível prever necessidades de:</p>
          <ul>
            <li>compra e reposição;</li>
            <li>reduzir a incidência de perdas por roubo ou por vencimento dos prazos de validade;</li>
            <li>otimizar o espaço físico de armazenamento;</li>
            <li>acordar melhores condições de negociação com os fornecedores;</li>
            <li>controlar o uso do investimento, dentre outros.</li>
          </ul>

          <h1>Vantagens em fazer o controle de estoque com o Sistema CHAVE</h1>
          
            <h2>Cadastro de estoque de produtos</h2>
            <p>É por meio do cadastro de produtos que começa o processo de gestão do seu estoque no sistema CHAVE. Ao toque de poucos botões, você insere dados do produto como nome, quantidade, código, embalagem e marca. </p>

            <h2>Baixa de estoque</h2>
            <p>Toda vez que você utilizar um produto, só precisa acessar o sistema pelo computador ou celular para dar baixa no estoque. Desta forma, você não perde tempo e faz um controle muito mais preciso.</p>
            <p>A atualização é feita em tempo real, visando reduzir ao máximo o número de erros ligados a quantidades disponíveis. Um programa de controle de estoque desenvolvido especialmente para você!</p>

            <h2>Entrada rápida de estoque</h2>
            <p>Um dos muitos benefícios de fazer controle de estoque online com o CHAVE é o acesso ao registro de entradas e saídas de produtos. Com ele, você acompanha todas as movimentações de forma detalhada. </p>

            <p>
              Também pode lançar a entrada de um item e o sistema atualiza automaticamente a quantidade em estoque. É uma forma de ajudar a poupar seu tempo com tarefas corriqueiras.
              O CHAVE é a ferramenta para controle de estoque que você nem sabia que precisava.
            </p>


        
          
          <div className={styles.classbutton}><Link href="/signup">
          <button className={styles.clbutton}>QUERO FAZER PARTE DO SISTEMA CHAVE!</button></Link></div>






        </main>

     
      <Footer/>
      

      
    </>


  )
}