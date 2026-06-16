import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Partners */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <Image src="/images/logo-igcat.png" alt="IGCAT" width={150} height={48} className="h-10 w-auto brightness-0 invert opacity-90" />
            <Image src="/images/logo-cac.png" alt="هيئة فنون الطهي" width={170} height={54} className="h-12 w-auto brightness-0 invert opacity-90" />
            <Image src="/images/logo-wrg.png" alt="World Region of Gastronomy" width={150} height={84} className="h-16 w-auto brightness-0 invert opacity-90" />
          </div>
        </div>
      </div>

      {/* Get involved + contact */}
      <div id="contact" className="mx-auto max-w-content px-4 sm:px-6 py-16">
        <Reveal className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-kicker text-orange">
              <span className="h-px w-8 bg-orange" />
              انضم إلى الحركة
            </span>
            <h2 className="mt-4 font-heading font-bold text-4xl sm:text-5xl text-orange">
              كن جزءًا من الرحلة
            </h2>
            <p className="mt-5 text-white/75 leading-loose max-w-lg">
              نجاح هذه المبادرة يعتمد على التعاون والشراكة. سواء كنت طاهيًا أو مزارعًا أو
              حرفيًا أو رائد أعمال أو أكاديميًا أو باحثًا أو مختصًا في السياحة أو أحد
              أفراد المجتمع، فإن مساهمتك تصنع الفرق.
            </p>
            <p className="mt-4 text-white/75 leading-loose max-w-lg">
              معًا نبني مستقبلًا يحتفي بالتراث ويصنع فرصًا مستدامة للأجيال القادمة،
              يجمع بين فنون الطهي والثقافة والسياحة المستدامة.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:info@igcat.org" className="rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-amber">
                العودة للأعلى
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/collage.png"
              alt="فنون الطهي والثقافة والتراث المحلي"
              width={760}
              height={440}
              className="w-full h-auto object-cover"
            />
          </div>
        </Reveal>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <span>© {new Date().getFullYear()} جدة والطائف — نحو منطقة عالمية لفنون الطهي</span>
          <span>هيئة فنون الطهي · IGCAT</span>
        </div>
      </div>
    </footer>
  );
}
