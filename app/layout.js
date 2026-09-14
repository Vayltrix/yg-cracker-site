import './globals.css';
import Link from 'next/link';

export const metadata = { title:'Yoga Ganapathy Crackers', description:'Yoga Ganapathy Crackers – quality fireworks and festive products.' };

export default function RootLayout({children}){
 return <html lang="en"><body>
  <div className="topbar">YOGA GANAPATHY CRACKERS • FESTIVE COLLECTION 2026</div>
  <header className="nav"><div className="wrap nav-inner">
    <Link className="brand" href="/"><span className="brand-mark">ॐ</span><span><span className="brand-title">Yoga Ganapathy</span><br/><span className="brand-sub">CRACKERS</span></span></Link>
    <nav className="nav-links"><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link className="nav-admin" href="/admin">Admin</Link></nav>
  </div></header>
  {children}
  <footer className="footer"><div className="wrap footer-inner"><div><strong>Yoga Ganapathy Crackers</strong><br/><small>Celebrate brightly. Order easily.</small></div><div><small>© {new Date().getFullYear()} Yoga Ganapathy Crackers. All rights reserved.</small></div></div></footer>
 </body></html>
}
