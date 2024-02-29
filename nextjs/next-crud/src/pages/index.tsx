import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div className={`
    flex h-screen
    bg-gradient-to-l  from-slate-500 to-slate-100
    justify-center items-center text-black
    `}>
      <Layout titulo={'Cadastro Simples'}>
        <span>Conteudo</span>
      </Layout>
    </div>
  );
}

