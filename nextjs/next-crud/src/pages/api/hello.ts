// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cliente from "@/core/Cliente";
import type { NextApiRequest, NextApiResponse } from "next";
import {pool} from '../../config/db'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const cliente = new Cliente({nome:'julia',idade: 27,email:'julia@finados.com',pai:'dorival'})
  await pool.query(`insert into cliente(nome,idade,email,pai) values(${cliente.insereCliente()})`)
  let [resposta]= await pool.query('SELECT * FROM cliente')
  const chaves=Object.keys(resposta)
  const lista=chaves.map((chave)=>new Cliente(resposta[chave]))
  res.status(200).send(lista);
}
