
import Image from "next/image";
import logoImage from '@/public/about-header.jpg'
export const metadata = {
    title: "Clubbe | Hakkımızda",
};
export default function About() {
    return (
        <div className="w-full">
            <div className="relative">
                <Image src={logoImage}
                    priority={true}
                    alt="" />
            </div>
            <div className="container m-auto p-7">
                <h1 className='font-bold text-primary text-3xl lg:text-4xl mb-2 drop-shadow-md text-center lg:my-9 my-5'>Hakkımızda</h1>
                <h2 className='font-bold text-primary text-xl lg:text-2xl drop-shadow-md text-left mb-3 mt-11'>Öygem Taşımacılık: Sizinle Yola Çıkıyor!</h2>
                2011 yılında kurulan Öygem Taşımacılık, kaliteli ve güvenilir nakliyat hizmetleri sunma misyonuyla yola çıktı. Başladığımız günden beri, müşteri memnuniyeti odaklı yaklaşımımızla birlikte sektörde adımızdan sıkça söz ettirdik. Taşımanın karmaşıklığını basitleştirmek, güvenilir bir ortak olmak ve müşterilerimizin beklentilerini aşmak için var gücümüzle çalışıyoruz.
                <br></br>
                <h2 className='font-bold text-primary text-xl lg:text-2xl drop-shadow-md text-left mb-3 mt-9'>Misyonumuz</h2>
                Müşterilerimizin değerli eşyalarını güvenle taşımak, kaliteli hizmet anlayışımızla taşımacılık sektöründe öncü olmak ve sürekli gelişen bir firma olarak müşteri memnuniyetini en üst seviyede tutmak.
                <br></br>
                <h2 className='font-bold text-primary text-xl lg:text-2xl drop-shadow-md text-left mb-3 mt-9'>Vizyonumuz</h2>
                Öygem Taşımacılık olarak, taşımanın her aşamasında kaliteli, hızlı ve güvenilir çözümler sunarak müşterilerimizin hayatını kolaylaştırmak ve sektörde örnek bir firma olmak.
                <br></br>
                <h2 className='font-bold text-primary text-xl lg:text-2xl drop-shadow-md text-left mb-3 mt-9'>Neden Öygem?</h2>
                Deneyim: 10 yıllık tecrübemizle, her türlü taşıma ihtiyacınıza uygun çözümler sunuyoruz.
                Güven: Eşyalarınız bizimle güvende! Profesyonel ekibimiz ve modern araç filomuzla güvenilir taşıma hizmeti sağlıyoruz.
                Müşteri Odaklılık: Müşteri memnuniyetini her şeyin üzerinde tutuyor, her müşterimizi ayrıcalıklı hissettiriyoruz.
                İnovasyon: Sektördeki gelişmeleri yakından takip ederek sürekli olarak hizmet kalitemizi artırıyoruz.
                <h2 className='font-bold text-primary text-xl lg:text-2xl drop-shadow-md text-left mb-3 mt-9'>Biz Kimiz?</h2>
                Öygem Taşımacılık, işinde uzman ve alanında deneyimli bir ekip ile çalışmaktadır. Müşterilerimize taşımanın getirdiği stresi azaltmak ve güvenilir bir taşıma deneyimi yaşatmak adına her zaman yanınızdayız.

                İster şehir içi ister şehirlerarası olsun, Öygem Taşımacılık olarak sizinle birlikte taşınmak için buradayız. Bize güvenin, taşınmanın huzurlu tarafını yaşayın!
            </div>
        </div>
    )
}