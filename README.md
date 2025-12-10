# Loài Ngoại Lai Xâm Hại ở Việt Nam

A Next.js web application for browsing and searching invasive alien species in Vietnam, based on Circular 35/2018/TT-BTNMT from the Ministry of Natural Resources and Environment.

## Features

- 🔍 **Search & Filter**: Search by Vietnamese or scientific names, filter by species groups
- 🖼️ **Image Gallery**: View multiple images for each species with lightbox
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

Edit `SPECIES_LIST` in `app/speciesList.ts`:

```typescript
{
  group: "Thực vật",
  vietnameseName: "Tên tiếng Việt",
  scientificNames: ["Scientific name"],
  photos: [
    {
      url: "/species/image-name.jpg",
      author: "author name",
      source: "source url"
      license: "CC/C/...",

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

This project is for educational and conservation purposes. Species data is based on Circular 35/2018/TT-BTNMT.
