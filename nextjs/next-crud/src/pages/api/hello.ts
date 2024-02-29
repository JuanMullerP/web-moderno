// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {pool} from '../../config/db'

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await pool.query(`insert into cliente(nome,idade,email,pai) values('maria3',12,'mariamaria@gcinto.com','alinelson')`)
  let [resposta]= await pool.query('SELECT * FROM cliente')
  console.log(resposta)
  res.status(200).json({ name: "John Doe" });
}
