import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <span className="section-kicker">
              <span className="h-px w-8 bg-orange" />
              عن المبادرة
            </span>
            <h2 className="section-title mt-4">
              ما هو معهد IGCAT؟
            </h2>
            <p className="mt-6 text-navy/70 leading-loose text-base sm:text-lg">
              المعهد الدولي لفنون الطهي والثقافة والفنون والسياحة (IGCAT) هو منظمة دولية
              غير ربحية تهدف إلى تعزيز التنمية المستدامة من خلال دمج الثقافة وفنون الطهي
              والفنون والسياحة.
            </p>
            <p className="mt-4 text-navy/70 leading-loose text-base sm:text-lg">
              يساعد المعهد المناطق حول العالم على إبراز هويتها الغذائية والثقافية، وتنمية
              اقتصادها المحلي، وتعزيز الابتكار، وخلق فرص مستدامة للأجيال القادمة.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Image src="/images/logo-igcat.png" alt="IGCAT" width={130} height={42} className="h-9 w-auto" />
              <div className="h-8 w-px bg-black/10" />
              <Image src="/images/logo-cac.png" alt="هيئة فنون الطهي" width={150} height={48} className="h-10 w-auto" />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/food-spread.png"
                  alt="مائدة تقليدية"
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 rounded-2xl bg-orange px-6 py-5 text-white shadow-xl max-w-[220px]">
                <div className="font-heading font-bold text-xl leading-snug">
                  ترشيح جدة والطائف كمنطقة طهي عالمية
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
