// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}[];

const productData = [
  {
    _id:101,
    title: "Canon E05 Rebel T100",
    description: "Canon E05 Rebel T100 Digital SRL Camera with 18-55mm Lens-Kit, 18  Megapixel Sensor",
    oldPrice: 700.0,
    price: 559.99,
    brand: "Canon",
    image: "https://i.ibb.co/1r28gMk/1.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:102,
    title: "DJI Air",
    description: "DJI Mini 2 Fly more Combo - Ultralight Foldable Drone, 3-axis Gimbal with 4K",
    oldPrice: 1050.0,
    price: 997.99,
    brand: "DJI",
    image: "https://i.ibb.co/qdfB3s6/3.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:103,
    title: "Apple 10.2-inch iPad",
    description: "2021 Apple-inch Ipad Wi-fi 64GB - Space Gray (9th Generation)",
    oldPrice: 329.0,
    price: 269.99,
    brand: "DJI",
    image: "https://i.ibb.co/qdfB3s6/2.webp",
    isNew: true,
    category: "Eletronics",
    
  },


  {
    _id:104,
    title: "Iphone 14",
    description: "AT&T Iphone 14 128GB Midnight",
    oldPrice: 1705.0,
    price: 1200.99,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:105,
    title: "Iphone 14",
    description: "AT&T Iphone 14 128GB Midnight",
    oldPrice: 1705.0,
    price: 1200.99,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:106,
    title: "Iphone 14",
    description: "AT&T Iphone 14 128GB Midnight",
    oldPrice: 1705.0,
    price: 1200.99,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:107,
    title: "Iphone 14",
    description: "AT&T Iphone 14 128GB Midnight",
    oldPrice: 1705.0,
    price: 1200.99,
    brand: "Apple",
    image: "https://i.ibb.co/5F3nWv6/7.webp",
    isNew: true,
    category: "Eletronics",
    
  },

  {
    _id:107,
    title: "Retro CCCP-skjorte 1982 Sovjetunionen Herre",
    description: "Retro CCCP-skjorte 1982 er en nostalgisk påminnelse om den ikoniske fotballtrøyen fra Sovjetunionen. Denne herretrøyen bringer tilbake minner fra 1982, da Sovjetunionens landslag gjorde seg bemerket på internasjonalt nivå.",
    oldPrice: 500.0,
    price: 4500.99,
    brand: "NYC",
    image: "https://http2.mlstatic.com/D_NQ_NP_998696-MLB69984404073_062023-O.webp",
    isNew: true,
    category: "Shirts",
    
  },
 
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData)
}
