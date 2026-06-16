import Reveal from "./Reveal";

export default function Vision() {
  return (
    <section id="vision" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-kicker justify-center">
            <span className="h-px w-8 bg-orange" />
            الرؤية
            <span className="h-px w-8 bg-orange" />
          </span>
          <p className="mt-8 font-heading font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.5] text-navy">
            أن تصبح جدة والطائف وجهة عالمية رائدة في الثقافة الغذائية والسياحة
            المستدامة، من خلال إبراز التراث المحلي، وتمكين المجتمعات، وتعزيز الابتكار
            والتعليم، بما يحقق تنمية اقتصادية وثقافية مستدامة ويعزز مكانة المنطقة عالميًا.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
