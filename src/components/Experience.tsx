import { motion, useReducedMotion } from 'framer-motion';
import { figmaAssets } from '../data/figmaAssets';
import { experiences } from '../data/experiences';
import { DecorationLayer } from './DecorationLayer';
import { SectionTitle } from './SectionTitle';

const experienceImages = {
  pool: figmaAssets.experience.pool,
  shore: figmaAssets.experience.shore,
  night: figmaAssets.experience.night,
  bar: figmaAssets.experience.bar,
  gym: figmaAssets.experience.gym
};

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative overflow-hidden bg-[#dff7f3] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(223,247,243,0.88))]" />
      <DecorationLayer variant="ocean" density="normal" />

      <div className="container-x relative z-10">
        <SectionTitle label="ĐIỂM ĐẾN" title="ĐÁNG TRẢI NGHIỆM" className="design-section-title experience-section-title" />
        <motion.p
          className="fit-copy mx-auto mt-6 max-w-3xl text-center text-lg font-semibold leading-8 text-slate-700"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
        >
          Khám phá "đại bản doanh" của những Future Makers tại Dragon Dream Resort với các tiện ích miễn phí hoàn
          toàn.
        </motion.p>

        <motion.div
          className="mt-12 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[250px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.16 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.09
              }
            }
          }}
        >
          {experiences.map((item, index) => (
            <motion.article
              key={item.title}
              className={[
                'group relative overflow-hidden rounded-[1.7rem] bg-white shadow-soft ring-1 ring-white/70',
                item.featured ? 'md:row-span-2' : '',
                index === 2 ? 'lg:col-start-3 lg:row-span-2' : ''
              ].join(' ')}
              variants={{
                hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              title={item.title}
            >
              <img
                src={experienceImages[item.visual]}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                loading="lazy"
                decoding="async"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
