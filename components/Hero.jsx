import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero-tahi.jpg"
        alt="طبق من فنون الطهي المحلية"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/45 to-navy/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 w-full">
        <div className="max-w-3xl text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange/90 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide">
            نحو منطقة عالمية لفنون الطهي
          </span>

          <h1 className="mt-6 font-heading font-bold leading-[1.1] text-4xl sm:text-6xl lg:text-7xl">
            جدة والطائف
            <span className="block text-2xl sm:text-4xl lg:text-5xl mt-3 font-medium text-sand">
              نحو منطقة عالمية لفنون الطهي
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
            رحلة تحتفي بالتراث والثقافة والمطبخ المحلي والاستدامة والابتكار. تعمل جدة
            والطائف معًا على بناء وجهة عالمية رائدة تجعل من فنون الطهي وسيلة للحفاظ على
            الهوية الثقافية، وتعزيز التنمية الاقتصادية، وتمكين المجتمعات المحلية، ودعم
            السياحة المستدامة.
          </p>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            اكتشف كيف يسهم المزارعون والطهاة والحرفيون ورواد الأعمال والمجتمعات المحلية
            في صناعة مستقبل قائم على الأصالة والتميز.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="rounded-full bg-orange px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-black/20 transition hover:bg-amber"
            >
              استكشف الرحلة
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/60 px-7 py-3.5 text-sm sm:text-base font-bold text-white transition hover:bg-white hover:text-navy"
            >
              كن جزءًا من الرحلة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
