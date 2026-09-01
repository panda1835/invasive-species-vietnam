# Loài Ngoại Lai Xâm Hại ở Việt Nam

A Next.js web application for browsing and searching the 67 invasive alien species in Appendix II of [Circular 69/2025/TT-BNNMT](https://congbao.chinhphu.vn/van-ban/thong-tu-so-69-2025-tt-bnnmt-46752.htm) from the Ministry of Agriculture and Environment. The circular took effect on 15 January 2026 and replaced Circular 35/2018/TT-BTNMT.

## Features

- 🔍 **Search & Filter**: Search by Vietnamese or scientific names, filter by species groups
- 🖼️ **Image Gallery**: View multiple images for each species with lightbox
- 🔗 **Image Attribution**: Open-license details and direct iNaturalist observation or Wikimedia Commons source links
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🌐 **SEO Optimized**: Comprehensive metadata, structured data, and social sharing

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

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

## Adding Species Data

Edit the entries in `app/invasive-species-photos.json` (re-exported by `app/speciesList.ts`):

```typescript
{
  group: "Thực vật",
  vietnameseName: "Tên tiếng Việt",
  scientificNames: ["Scientific name"],
  photos: [
    {
      url: "/species/image-name.jpg",
      author: "author name",
      source: "iNaturalist observation or Wikimedia Commons file URL",
      license: "CC0 / CC BY / CC BY-SA / Public domain",
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

## License

This project is for educational and conservation purposes. Species data is based on Appendix II of [Circular 69/2025/TT-BNNMT](https://congbao.chinhphu.vn/van-ban/thong-tu-so-69-2025-tt-bnnmt-46752.htm).
