import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Clubbe",
  description:
    "Eşya taşımayı kolaylaştıran yeni nesil nakliye uygulaması ile tanışmanın zamanı geldi! Anlık fiyat teklifi, ekstra hizmet seçenekleri ve hızlı sipariş",
  keywords:
    "Oygem taşımacılık, özel yük taşıma, ağır nakliyat, proje kargo, uluslararası taşıma, lojistik çözümler, güvenilir taşıma hizmetleri, taşıma güvenliği, uygun fiyatlı ağır yük taşıma, taşıma sigortası.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        <main className="lg:pt-[122px] pt-[62px] z-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
