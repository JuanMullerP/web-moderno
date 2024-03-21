import Layout from "@/components/Layout";
import Tabela from "@/components/Table";
import Cliente from "@/core/Cliente";
import { useState } from "react";



export default  function Home() {
  let [dados,setDados]=useState([{}])
  
  // setTimeout(()=>{
    
  //   fetch('http://localhost:3000/api/hello').then(resp=>resp.json()).then(dados=>setDados(dados))
  // },100)
  
  return (
    <div className={`
    flex h-screen
    bg-gradient-to-l  from-slate-500 to-slate-100
    justify-center items-center text-black
    `}>
      <Layout titulo={'Cadastro Simples'}>
        <Tabela clientes={[new Cliente({id:20,nome:'ale',idade: 29,email:'jorjiscreu@gkau.com',pai:'alaoqfalei'})]}></Tabela>
      </Layout>
    </div>
  );
}

