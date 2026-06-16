import Reveal from "./Reveal";

const items = [
  {
    flag: "https://flagcdn.com/w80/sa.png",
    flagAlt: "السعودية",
    title: "مشروع الزراعة العضوية",
    year: "2024",
    color: "bg-orange",
    desc: "أطلقت منطقة عسير مشروعًا للزراعة العضوية يشمل 21 مزرعة تجريبية تتلقى تدريبًا مكثفًا لتصبح نموذجًا إقليميًا للممارسات الزراعية العضوية المستدامة. يهدف المشروع إلى توسيع قطاع الزراعة العضوية وتشجيع المزارعين التقليديين على التحول إلى الأساليب العضوية عبر دعم حكومي وتدريب فني.",
  },
  {
    flag: "https://flagcdn.com/w80/es.png",
    flagAlt: "إسبانيا",
    title: "مصنع الوجبات الجاهزة من المحاصيل الفائضة",
    year: "2022",
    color: "bg-terracotta",
    desc: "مبادرة في مينوركا لإنشاء مصنع يقوم بتحويل فائض المحاصيل الزراعية الموسمية إلى وجبات جاهزة وطازجة. يتم تنظيف وتقطيع وتعبئة الخضروات والفواكه الفائضة داخل منشأة إنتاجية متخصصة، مع توفير فرص عمل ودخل ثابت، خاصة لدعم ذوي الاحتياجات الخاصة. يسهم المشروع في تقليل الهدر الغذائي وتوفير منتجات محلية صحية للسكان.",
  },
  {
    flag: "https://flagcdn.com/w80/sa.png",
    flagAlt: "السعودية",
    title: "جمعية حفظ النعمة لتقليل هدر الطعام",
    year: "2024",
    color: "bg-amber",
    desc: "مبادرة تهدف إلى الحد من هدر الطعام من خلال جمع الفائض من الأغذية وإعادة توزيعه على المحتاجين بطريقة منظمة وآمنة. كما تشمل المبادرة حملات توعوية لرفع الوعي المجتمعي بأهمية حفظ النعمة وترشيد الاستهلاك، وتعزيز ثقافة الاستدامة والمسؤولية تجاه الموارد الغذائية.",
  },
  {
    flag: "https://flagcdn.com/w80/ie.png",
    flagAlt: "إيرلندا",
    title: "مبادرة Bia لتوزيع الغذاء الفائض",
    year: "2018",
    color: "bg-teal",
    desc: "ضمن برنامج \"كن أكثر اخضرارًا\" في غالواي بإيرلندا، أُطلقت مبادرة لإنشاء مستودع غذائي تتبعه منظمة Bia بهدف إعادة توزيع فائض الطعام من الشركات والمحلات إلى الجمعيات الخيرية المحلية. استفادت المبادرة من الأغذية الصالحة التي كانت ستُهدر لإطعام الفئات المحتاجة، مما دعم الأمن الغذائي المحلي وساهم في تقليل النفايات الغذائية في الوقت نفسه.",
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-20 sm:py-28 bg-sand">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <span className="section-kicker">
            <span className="h-px w-8 bg-orange" />
            المبادرات الرئيسية
          </span>
          <h2 className="section-title mt-4">أمثلة من المبادرات الخاصة بمعيار إطعام الكوكب</h2>
          <p className="mt-5 text-navy/65 leading-loose">
            نعمل على تحويل الرؤية إلى واقع ملموس من خلال مبادرات نوعية تحوّل الطموح إلى
            أثر قابل للقياس.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 2) * 90}>
              <div className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={it.flag}
                    alt={it.flagAlt}
                    width={32}
                    height={24}
                    className="h-6 w-auto shrink-0 rounded-sm shadow ring-1 ring-black/10"
                  />
                  <h3 className="font-heading font-bold text-xl text-navy leading-snug">{it.title}</h3>
                </div>
                <p className="mt-5 text-navy/70 leading-loose text-base sm:text-lg">{it.desc}</p>
                <div className="mt-6 pt-5 border-t border-black/5">
                  <span className="inline-flex items-center rounded-md bg-sand px-3 py-1.5 text-sm font-bold text-navy/70">
                    سنة الترشيح {it.year}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
