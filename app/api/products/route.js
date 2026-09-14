import { NextResponse } from 'next/server';
import { getProducts, saveProducts } from '@/lib/products';

function authorized(req){
  const expected = process.env.ADMIN_PASSWORD || 'admin123';
  return req.headers.get('x-admin-password') === expected;
}

export async function GET(){ return NextResponse.json(getProducts()); }

export async function POST(req){
  if(!authorized(req)) return NextResponse.json({error:'Unauthorized'},{status:401});
  const body = await req.json();
  if(!body.name || !body.content) return NextResponse.json({error:'Product name and content are required.'},{status:400});
  const products = getProducts();
  const product = {
    id: body.id || crypto.randomUUID(),
    category: body.category || 'Diwali Sales 2026',
    name: String(body.name), image: String(body.image || ''), content: String(body.content),
    actualPrice: Number(body.actualPrice || 0), price: Number(body.price || 0)
  };
  const index = products.findIndex(p => p.id === product.id);
  if(index >= 0) products[index] = product; else products.push(product);
  saveProducts(products);
  return NextResponse.json(product);
}

export async function DELETE(req){
  if(!authorized(req)) return NextResponse.json({error:'Unauthorized'},{status:401});
  const {id} = await req.json();
  saveProducts(getProducts().filter(p => p.id !== id));
  return NextResponse.json({ok:true});
}
