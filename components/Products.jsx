import Image from "next/image";
import Reveal from "./Reveal";

const products = [
  {
    img: "/images/coffee-pouch.png",
    award: "المركز الأول · ٢٠٢٤",
    name: "حافظة حبوب البن السعودي",
    desc: "كيسٌ مصنوع يدوياً من قماش الكتان الفاخر وخيوط القطن الطبيعية، مزيّن بزخارف مستوحاة من ثوب المجنب وتدرجات ألوان شجرة البن، لتقديم حبوب البن مع الهيل والقرنفل كهدية راقية.",
    accent: "bg-orange",
  },
  {
    img: "/images/khawlani-set.png",
    award: "فائز · ٢٠٢٤",
    name: "مجموعة البن الخولاني السعودي",
    desc: "تحفة فنية تضم فناجين فخارية أنيقة في صندوق فاخر من خشب الجوز، مستوحى من تضاريس جبل طلان، نُحتت ارتفاعاته بدقة ليحمل القهوة الخولانية الأصيلة — الذهب الأخضر.",
    accent: "bg-terracotta",
  },
  {
    img: "/images/suwaiqa-basket.png",
    award: "فائز · ٢٠٢٤",
    name: "مجموعة سلة السويقة",
    desc: "سلة منسوجة بدقة من سعف النخيل المجفف، تحتوي على أربع جرار زجاجية تضم مسحوق الشعير والعسل والسمن والتمر، مع حصيرة وملاعق خشبية — خيارٌ عملي وأنيق للإهداء.",
    accent: "bg-amber",
  },
  {
    img: "/images/date-bowl.png",
    award: "فائز · ٢٠٢٤",
    name: "وعاء التمر",
    desc: "طبقٌ فاخر مستوحى من نقوش الأبواب في منطقة عسير، يحمل بين طياته كرم الأرض، لتقديم التمر والحلوى والمكسرات أو كتحفة فنية في المنازل والمكاتب.",
    accent: "bg-teal",
  },
  {
    img: "/images/khoos-cups.png",
    award: "المركز الثالث · ٢٠٢٥",
    name: "مجموعة أكواب الخوص",
    desc: "تكريمٌ للتفاصيل الدقيقة لحرفة الخوص التقليدية، بأنماط مصنوعة بعناية تربط بين التصميم الحديث والتقاليد الثقافية الغنية، لتجربة طعامٍ بلمسة من التاريخ والرقي.",
    accent: "bg-plum",
  },
  {
    img: "/images/qasbah-date.png",
    award: "أفضل إعادة تصور للتراث · ٢٠٢٥",
    name: "وعاء التمر المستوحى من برج القصبة",
    desc: "وعاءٌ مصنوع يدوياً من الخشب يجسّد الشكل الأسطواني الفريد لأبراج القصبة في عسير، بحُجرتين لتقديم التمر وحُجرة مخصصة للنوى لتسهيل التنظيف.",
    accent: "bg-crimson",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-kicker justify-center">
            <span className="h-px w-8 bg-orange" />
            تحدي هدايا الطعام
            <span className="h-px w-8 bg-orange" />
          </span>
          <h2 className="section-title mt-4">المنتجات الفائزة لعام 2024</h2>
          <p className="mt-5 text-navy/65 leading-loose">
            تصاميمٌ تحتفي بالتراث العسيري وتعيد تصوّره بلغة معاصرة — من حبوب البن إلى
            أبراج القصبة، حكايةٌ في كل قطعة.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-2xl">
                <div className="relative overflow-hidden bg-sand">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={560}
                    height={420}
                    className="w-full h-60 object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className={`absolute top-4 right-4 rounded-full ${p.accent} px-3 py-1 text-xs font-bold text-white shadow`}>
                    {p.award}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading font-bold text-lg text-navy">{p.name}</h3>
                  <p className="mt-3 text-sm text-navy/60 leading-relaxed">{p.desc}</p>
                  <span className={`mt-5 h-1 w-12 rounded-full ${p.accent}`} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
