import Image from "next/image";
import Reveal from "./Reveal";

const achievements = [
  "جوائز تحدي الهدايا الغذائية العالمية",
  "جوائز أفلام الطعام",
  "مبادرات السياحة المستدامة",
  "برامج الابتكار الغذائي",
  "مشاريع الحفاظ على التراث الثقافي",
];

export default function SuccessStories() {
  return (
    <section id="stories" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <span className="section-kicker">
              <span className="h-px w-8 bg-orange" />
              قصص نجاح ملهمة
            </span>
            <h2 className="section-title mt-4">الاحتفاء بالتميز الإقليمي</h2>
            <p className="mt-6 text-navy/70 leading-loose text-base sm:text-lg">
              حققت المبادرات والمشاريع المرتبطة ببرنامج IGCAT حضورًا دوليًا مميزًا من
              خلال مشاركات ناجحة في مسابقات ومبادرات عالمية، بما يعكس ثراء التراث
              المحلي وإبداع المجتمعات.
            </p>

            <p className="mt-8 font-bold text-navy">ومن أبرز الإنجازات:</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-navy/75 leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl shadow-xl translate-y-6">
                <Image src="/images/award-group.png" alt="مشاركات دولية ناجحة" width={400} height={300} className="w-full h-44 sm:h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image src="/images/magazine.png" alt="الاعتراف الدولي" width={400} height={520} className="w-full h-56 sm:h-72 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl col-span-2">
                <Image src="/images/stage-award.png" alt="الاحتفاء بالإنجازات" width={760} height={420} className="w-full h-48 sm:h-60 object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
