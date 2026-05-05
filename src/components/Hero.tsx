import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from '../assets/images/hotel.mp4'
import poster from '../assets/images/about.jpg'
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
//   },
// };

const Hero = () => {
  return (
    <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    aria-label="Section d’accueil - Hôtel de luxe au Cameroun"
  >
    {/* VIDEO BACKGROUND */}
    <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={hero}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    />
  
    {/* Overlay sombre (important pour lisibilité du texte) */}
    <div className="absolute inset-0 bg-black/80 z-10" />
  
    {/* Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.04] z-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_59px,rgba(201,169,110,1)_60px),repeating-linear-gradient(90deg,transparent,transparent_59px,rgba(201,169,110,1)_60px)]" />
  
    {/* Content */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-20 text-center max-w-3xl px-6"
  >
        {/* Subtitle */}
        <motion.p
          variants={container}
          className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-white mb-6 md:mb-8"
        >
          Hôtel & Collection de luxe premium au Cameroun
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={container}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-tight text-[#f5f1e8] mb-4"
        >
          <em className="italic text-button">Le Luxe à votre portée</em>
        </motion.h1>

        {/* Line */}
        <motion.div
          variants={container}
          className="w-12 md:w-15 h-px bg-button mx-auto mb-8 md:mb-10"
        />

        {/* Description */}
        <motion.p
          variants={container}
          className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400 mb-10 md:mb-12 max-w-xl mx-auto"
        >
          Découvrez trois destinations exceptionnelles, des suites haut de gamme
          et une expérience hôtelière prestigieuse au cœur du Cameroun
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={container}
          className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6"
        >
          <button className="btn">
           <Link to='/rooms'> Découvrir les suites</Link>
          </button>

          <button className="rounded-full border border-button/50 text-button px-8 md:px-10 py-3 text-[10px] tracking-[0.25em] uppercase font-light transition hover:bg-button/10 hover:border-button">
           <Link to='/branches'>Nos emplacements</Link>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white">
          Découvrir
        </span>
        <div className="w-px h-8 md:h-10 bg-linear-to-b from-button to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default Hero;