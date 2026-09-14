# Yoga Ganapathy Crackers – Next.js

A red / white / yellow Next.js site inspired by the supplied product-table reference image and the previous crackers site.

## Pages
- `/` Home
- `/products` Product catalogue with search, category filter, quantity, live total and Order action
- `/contact` Contact page
- `/admin` Admin product manager

## Admin
Default local password: `admin123`

For a custom password create `.env.local`:

```env
ADMIN_PASSWORD=your-password
NEXT_PUBLIC_ORDER_NUMBER=919843572122
```

The admin adds products to `data/products.json`. The catalogue reads this data through the Next.js API, so products added from Admin appear on `/products` after saving.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Important
This uses a local JSON file as the product database, suitable for a local/server installation. For a hosted multi-user production site, replace the JSON store with MySQL/PostgreSQL/Supabase or another persistent database and protect `/admin` with real authentication.

The Order action prepares the selected product, quantity and total and opens the configured business messaging number. The visible site copy does not label the feature as “WhatsApp orders”.
