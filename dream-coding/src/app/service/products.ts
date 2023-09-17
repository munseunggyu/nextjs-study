import path from 'path';
import { promises as fs } from 'fs'
export type Product = {
  id: string,
  name: string,
  price: number
}
export async function getProducts(): Promise<Product[]> {
  const dir = path.join(process.cwd(), 'data', 'products.json')
  const data = await (fs.readFile(dir, 'utf-8'))
  return JSON.parse(data)
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // getProducts().find(val => val === id)
  const products = await getProducts()
  return products.find(val => val.id === id)
}