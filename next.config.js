/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return {
        afterFiles: [
          {
            source: "/urunler",
            destination: "/product",
          },
          {
            source: "/urunler/:slug",
            destination: "/product/:slug",
          },
          {
            source: "/hakkimizda",
            destination: "/about",
          },
          {
            source: "/iletisim",
            destination: "/contact",
          },
          {
            source: "/katalog",
            destination: "/catalog",
          },
          {
            source: "/katalog/:slug",
            destination: "/catalog/:slug",
          }
        ],
      };
    },
    images: {
      formats: ["image/webp"],
      domains:["clubbe.online","fakestoreapi.com"]
    },
    reactStrictMode:false, //consol 1 kere çalışması için
  };
  
  module.exports = nextConfig;
  