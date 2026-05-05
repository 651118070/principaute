import Footer from "../components/CTA";
import Navbar from "../components/Navbar";

const timeline = [
    {
      year: "2020",
      title: "La Fondation",
      desc: "Naissance de La Principauté Hotel à Douala, portée par une vision ambitieuse : offrir une hospitalité de luxe au standard international au cœur du Cameroun.",
    },
  
    {
      year: "2024",
      title: "Expansion à Bakassa",
      desc: "Création d’un espace de retraite exclusif, alliant nature, sérénité et luxe dans un cadre exceptionnel.",
    },
    {
      year: "2026",
      title: "Lounge & Expérience VIP",
      desc: "Introduction d’un espace lounge haut de gamme, redéfinissant les standards de divertissement et de confort à Douala.",
    },
 
  ];
  
  const values = [
    {
      title: "Excellence",
      desc: "Chaque détail est pensé pour dépasser vos attentes, du service à l’expérience globale.",
    },
    {
      title: "Confort",
      desc: "Le luxe se ressent dans chaque espace, chaque texture et chaque instant vécu.",
    },
    {
      title: "Confiance",
      desc: "Nous bâtissons une relation durable avec nos clients basée sur la discrétion et la qualité.",
    },
    {
      title: "Héritage",
      desc: "Nous construisons une marque pensée pour durer et inspirer les générations futures.",
    },
  ];
  
  const About = () => {
    return (
      <>
        <Navbar/>
      <div className="bg-[#0f0c08] text-white">
  
        {/* HERO */}
        <section className="relative py-32 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(201,169,110,0.08),transparent)]" />
          <h1 className="text-4xl md:text-6xl font-serif">
            Notre <em className="text-button italic">Histoire</em> & Héritage
          </h1>
        </section>
  
        {/* STORY + MISSION */}
        <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">
          
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
              Qui sommes-nous
            </p>
  
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Une vision du <em className="italic text-button">luxe africain</em>
            </h2>
  
            <div className="w-10 h-px bg-button mb-6" />
  
            <p className="text-gray-400 leading-7 mb-6">
              Fondé par Mr Siewe Joseph convaincu que le Cameroun mérite une hospitalité d’exception,
              La Principauté Hotel est bien plus qu’un hôtel, c’est une expérience.
            </p>
  
            <p className="text-gray-400 leading-7">
              Inspirés par les plus grandes références mondiales, nous avons créé un univers où
              l’élégance contemporaine rencontre la richesse culturelle africaine.
            </p>
          </div>
  
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
              Mission & Vision
            </p>
  
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Redéfinir <em className="italic text-button">l’hospitalité</em>
            </h2>
  
            <div className="w-10 h-px bg-button mb-6" />
  
            <p className="text-gray-400 mb-6">
              <span className="text-white font-semibold">Notre mission :</span> offrir une expérience
              unique alliant luxe, confort et authenticité africaine.
            </p>
  
            <p className="text-gray-400">
              <span className="text-white font-semibold">Notre vision :</span> faire du Cameroun une
              destination incontournable du luxe en Afrique.
            </p>
          </div>
  
        </section>
  
        {/* VALUES */}
        <section className="px-6 md:px-16 py-20 bg-[#14100a] text-center">
          
          <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
            Nos valeurs
          </p>
  
          <h2 className="text-3xl md:text-5xl font-serif mb-12">
            Nos <em className="italic text-button">engagements</em>
          </h2>
  
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-8 border border-button/20 hover:border-button transition text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-button flex items-center justify-center" />
  
                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
  
                <p className="text-gray-400 text-sm leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* TIMELINE */}
        <section className="px-6 md:px-16 py-20">
  
          <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
            Parcours
          </p>
  
          <h2 className="text-3xl md:text-5xl font-serif mb-12">
            Notre <em className="italic text-button">évolution</em>
          </h2>
  
          <div className="relative pl-8 border-l border-button/30">
            {timeline.map((item, i) => (
              <div key={i} className="mb-10 relative">
  
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-button rounded-full" />
  
                <p className="text-xs tracking-[0.3em] text-button mb-1 pl-2">
                  {item.year}
                </p>
  
                <h3 className="font-serif text-xl mb-2">{item.title}</h3>
  
                <p className="text-gray-400 text-sm leading-6 max-w-md">
                  {item.desc}
                </p>
  
              </div>
            ))}
          </div>
  
        </section>
  
      </div>
      <Footer/>
      </>
    );
  };
  
  export default About;