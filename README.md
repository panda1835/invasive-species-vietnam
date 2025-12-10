# Loài Ngoại Lai Xâm Hại ở Việt Nam

A Next.js web application for browsing and searching invasive alien species in Vietnam, based on Circular 35/2018/TT-BTNMT from the Ministry of Natural Resources and Environment.

## Features

- 🔍 **Search & Filter**: Search by Vietnamese or scientific names, filter by species groups
- 🖼️ **Image Gallery**: View multiple images for each species with lightbox
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🌐 **SEO Optimized**: Comprehensive metadata, structured data, and social sharing
- ♿ **Accessible**: Semantic HTML and ARIA labels

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `NEXT_PUBLIC_SITE_URL` with your domain (for production)

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## SEO Optimization

This project includes comprehensive SEO features. See **[SEO_GUIDE.md](./SEO_GUIDE.md)** for:
- ✅ Completed optimizations
- 📋 Setup checklist
- 🎯 Best practices
- 📊 Performance monitoring

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main species gallery page
├── sitemap.ts          # Dynamic sitemap generation
├── opengraph-image.tsx # Social media preview image
└── globals.css         # Global styles

public/
├── species/            # Species images (add your images here)
├── robots.txt          # Search engine crawling rules
└── manifest.json       # PWA configuration
```

## Adding Species Data

Edit `SPECIES_LIST` in `app/page.tsx`:

```typescript
{
  id: 20,
  group: "Thực vật",
  vietnameseName: "Tên tiếng Việt",
  scientificNames: ["Scientific name"],
  images: [
    {
      src: "/species/image-name.jpg",
      alt: "Mô tả ảnh",
      credit: "Nguồn ảnh: ...",
    },
  ],
}
```

## Technologies

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Contributing

1. Add species images to `/public/species/`
2. Update species data in `app/page.tsx`
3. Optimize images (WebP, <200KB recommended)
4. Test search and filtering functionality

## License

This project is for educational and conservation purposes. Species data is based on Circular 35/2018/TT-BTNMT.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
