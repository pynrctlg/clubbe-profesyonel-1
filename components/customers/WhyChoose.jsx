"use client"
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TitleType from "../ui/TitleType";
import TextType from "../ui/TextType";


export default function WhyChoose() {
    const WhyInfo = [
        {
            id: 1,
            title: "Neden Bizi Tercih Etmelisiniz?",
            text: `Keskin Performans: NCR kesici takımlarımız, iş parçalarınızı mükemmel bir şekilde işleyerek, üretim süreçlerinizde keskin bir performans sunar.
            Dayanıklılık ve Ekonomiklik: Zorlu koşullara dayanabilen NCR kesici takımlarımız, uzun ömürleri ve düşük bakım maliyetleri ile ekonomik çözümler sunar.
            Esnek Uygulama: Farklı malzemeler ve işleme ihtiyaçları için tasarlanan çeşitli NCR kesici takımlarımız, işletmenizin geniş bir uygulama yelpazesi için uygunluk sağlar.`
        },
        {
            id: 2,
            title: "Firmamızın Avantajları",
            text: `Müşteri Odaklılık: Müşteri memnuniyeti bizim için önceliktir. Size özel çözümler sunarak işinizi en iyi şekilde destekliyoruz.
            Teknolojik İnovasyon: CNC işleme teknolojisindeki en son gelişmeleri takip ediyor ve ürün portföyümüzü sürekli olarak güncelliyoruz.
            Hızlı Teslimat: Siparişlerinizi zamanında ve güvenle teslim etmek için etkili lojistik ve üretim süreçleriyle çalışıyoruz.`
        },
        {
            id: 3,
            title: "Firmamızın Güvencesiyle",
            text: `Mükemmel Hizmet: Müşteri memnuniyeti odaklı hizmet anlayışımızla, size özel çözümler sunarak işbirliğimizi güçlendiriyoruz.
            Teknoloji Harikası Üretim: CNC işleme teknolojisindeki en son gelişmeleri yakından takip ediyor, ürün portföyümüzü sürekli olarak güncelliyoruz.
            Hızlı ve Güvenilir Teslimat: Siparişlerinizi zamanında ve güvenle teslim etmek için etkili lojistik ağımızla her an yanınızdayız.`
        },
        {
            id: 4,
            title: "Firmamızın Farkı",
            text: `Mükemmeliyet Odaklı Hizmet: Müşteri memnuniyeti bizim için bir önceliktir. Size özel çözümlerle, iş süreçlerinizi en üst düzeye çıkarmak için buradayız.
            Teknolojiye Yatırım: CNC işleme teknolojisinin öncüsü olarak, en son teknolojiye dayalı ürünlerimizle sürekli olarak yenilik ve gelişmeye açığız.
            Zamanında Teslimat: Hızlı ve güvenilir teslimat anlayışımızla, işlerinizin aksamadan devam etmesine yardımcı oluyoruz.`
        }
    ]

    const [isToggle, setIsToggle] = useState(1);

    return (
        <div className="bg-sixth py-20">
            <div className="container m-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                    <div className="relative h-[250px] lg:h-[400px] lg:mb-0">
                        <Image src="/s1.png" className="object-contain" fill alt="Get Leatest Update By Subscribe" />
                    </div>
                    <div>

                        {
                            WhyInfo.map((item) => (
                                <div className="bg-white px-5 rounded-lg mb-3" key={item.id}>
                                    <button className={`w-full text-left flex justify-between items-center ${item.id === isToggle && 'group'}`} onClick={() => setIsToggle(item.id)}>
                                        <TitleType titleType="h3" addClass="text-primary !text-lg !mb-0 py-5 cursor-pointer">{item.title}</TitleType>
                                        <IoIosArrowDown className="group-enabled:rotate-180 transition-all" />
                                    </button>
                                    {
                                        isToggle === item.id &&
                                        <TextType addClass="pb-5">
                                            {item.text}
                                        </TextType>
                                    }
                                </div>
                            ))
                        }

                    </div>


                </div>
            </div>
        </div>
    )
}