import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'data', 'products.json');
export function getProducts(){
  try { return JSON.parse(fs.readFileSync(file,'utf8')); } catch { return []; }
}
export function saveProducts(products){ fs.writeFileSync(file, JSON.stringify(products,null,2)); }
