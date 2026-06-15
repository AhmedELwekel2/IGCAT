import Reveal from "./Reveal";

const goals = [
  {
    color: "bg-orange",
    title: "إطعام الكوكب",
    desc: "دعم الأمن الغذائي والزراعة المستدامة وحماية التنوع الحيوي وتقليل الهدر الغذائي وبناء أنظمة غذائية مسؤولة للأجيال القادمة.",
  },
  {
    color: "bg-terracotta",
    title: "الابتكار والإبداع وفرص العمل",
    desc: "تمكين رواد الأعمال ودعم المشاريع المحلية وتشجيع الابتكار الغذائي وخلق فرص عمل مستدامة.",
  },
  {
    color: "bg-teal",
    title: "التعليم للمستقبل",
    desc: "تعزيز المعرفة الغذائية والثقافية من خلال التعليم والتدريب والبحث العلمي والشراكات الأكاديمية.",
  },
  {
    color: "bg-plum",
    title: "السياحة المتوازنة والمستدامة",
    desc: "بناء تجارب سياحية أصيلة تحافظ على الموارد وتدعم المجتمعات المحلية وتعزز الهوية الثقافية.",
  },
  {
    color: "bg-amber",
    title: "ربط الحضر بالريف",
    desc: "تعزيز التكامل بين المدن والمناطق الريفية من خلال الزراعة والأسواق المحلية وسلاسل الإمداد المستدامة.",
  },
  {
    color: "bg-crimson",
    title: "الرفاهية ونمط الحياة الصحي",
    desc: "تشجيع أنماط الحياة الصحية والاستهلاك المسؤول والوعي البيئي وتحسين جودة الحياة.",
  },
];

export default function Goals() {
  return (
    <section id="pillars" className="py-20 sm:py-28 bg-sand">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="section-kicker justify-center">
            <span className="h-px w-8 bg-orange" />
            ركائز المعهد
            <span className="h-px w-8 bg-orange" />
          </span>
          <h2 className="section-title mt-4">المحاور الستة للمعهد</h2>
          <p className="mt-5 text-navy/65 leading-loose">
            ست ركائز متكاملة تشكّل إطار العمل نحو تنمية إقليمية مستدامة تجعل من فنون
            الطهي محركًا للثقافة والاقتصاد والمجتمع.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="group h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${g.color} text-white font-heading font-bold text-lg`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-heading font-bold text-xl text-navy">{g.title}</h3>
                <p className="mt-3 text-navy/60 leading-relaxed">{g.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
