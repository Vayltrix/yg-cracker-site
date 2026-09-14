'use client';
import { useEffect, useMemo, useState } from 'react';

const number=process.env.NEXT_PUBLIC_ORDER_NUMBER || '919843572122';
function money(v){return '₹'+Number(v||0).toLocaleString('en-IN')}
export default function Products(){
 const [products,setProducts]=useState([]); const [search,setSearch]=useState(''); const [category,setCategory]=useState('All'); const [qty,setQty]=useState({});
 useEffect(()=>{fetch('/api/products').then(r=>r.json()).then(setProducts)},[]);
 const categories=useMemo(()=>['All',...new Set(products.map(p=>p.category))],[products]);
 const shown=products.filter(p=>(category==='All'||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase()));
 const order=(p)=>{const q=Math.max(1,Number(qty[p.id]||1)); const total=q*Number(p.price||0); const text=`Hi, I would like to order:\nProduct: ${p.name}\nContent: ${p.content}\nQuantity: ${q}\nPrice: ${money(p.price)}\nTotal: ${money(total)}`; window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer')};
 return <><section className="page-hero"><div className="wrap"><h1>Products</h1><p>Browse the catalogue, choose quantity and place your order.</p></div></section><div className="searchbar"><div className="wrap filters"><input aria-label="Search products" placeholder="Search an item" value={search} onChange={e=>setSearch(e.target.value)}/><select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></div></div><main className="product-wrap"><table className="product-table"><thead><tr><th>Image</th><th>Product Name</th><th>Content</th><th>Actual Price</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr></thead><tbody>{shown.length?shown.map((p,i)=><><tr key={p.id+'g'} className="group"><td colSpan="8">{i===0||shown[i-1].category!==p.category?p.category:''}</td></tr><tr key={p.id}><td>{p.image?<img className="product-img" src={p.image} alt=""/>:<div className="placeholder">✦</div>}</td><td>{p.name}</td><td>{p.content}</td><td className="actual">{money(p.actualPrice)}</td><td className="sale">{money(p.price)}</td><td><input className="qty" type="number" min="1" value={qty[p.id]||1} onChange={e=>setQty({...qty,[p.id]:e.target.value})}/></td><td><span className="total">{money(Number(p.price||0)*Number(qty[p.id]||1))}</span></td><td><button className="order-btn" onClick={()=>order(p)}>Order</button></td></tr></>):<tr><td colSpan="8" className="empty">No products found.</td></tr>}</tbody></table></main></>;
}
