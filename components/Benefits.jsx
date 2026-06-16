import Image from "next/image";
import Reveal from "./Reveal";

const benefits = [
  "تعزيز الهوية الثقافية.",
  "دعم المنتجين المحليين.",
  "تشجيع الابتكار.",
  "خلق فرص العمل.",
  "تنمية السياحة المستدامة.",
  "تحسين جودة الحياة.",
  "الحفاظ على المعرفة التقليدية.",
  "دعم الاقتصاد المحلي.",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-navy text-white overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              لماذا فنون الطهي
            </h2>
            <p className="mt-5 text-white/70 leading-loose">
              إنها رابط يجمع بين الثقافة والتاريخ والزراعة والهوية والإبداع والمكان.
              ومن خلالها يمكن:
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-white/85 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-xl translate-y-6">
                <Image src="/images/airport.png" alt="فنون الطهي والثقافة المحلية" width={400} height={300} className="w-full h-44 sm:h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image src="/images/magazine.png" alt="التراث الغذائي المحلي" width={400} height={520} className="w-full h-56 sm:h-72 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl col-span-2">
                <Image src="/images/stage-award.png" alt="الاحتفاء بفنون الطهي" width={760} height={420} className="w-full h-48 sm:h-60 object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
