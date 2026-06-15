import Reveal from "./Reveal";

const items = [
  { color: "bg-orange", title: "برامج المطاعم المستدامة" },
  { color: "bg-terracotta", title: "مبادرات تقليل البلاستيك" },
  { color: "bg-teal", title: "تطوير وتأهيل الطهاة" },
  { color: "bg-amber", title: "تحديات الهدايا الغذائية" },
  { color: "bg-plum", title: "مشاريع حفظ التراث" },
  { color: "bg-crimson", title: "برامج إشراك المجتمع" },
  { color: "bg-orange", title: "تطوير التجارب السياحية" },
  { color: "bg-teal", title: "دعم المنتجين المحليين" },
  { color: "bg-terracotta", title: "مبادرات السرد الثقافي" },
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
          <h2 className="section-title mt-4">مبادرات تصنع الأثر</h2>
          <p className="mt-5 text-navy/65 leading-loose">
            نعمل على تحويل الرؤية إلى واقع ملموس من خلال مبادرات نوعية تحوّل الطموح إلى
            أثر قابل للقياس.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 90}>
              <div className="group flex h-full items-center gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${it.color} text-white font-heading font-bold text-lg`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-bold text-lg text-navy leading-snug">{it.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
