import Footer from "../../components/CTA";
import Navbar from "../../components/Navbar";

// IMAGES
import hero from "../../assets/images/hotel.mp4";
import img1 from "../../assets/images/desk.jpg";
import img2 from "../../assets/images/desk1.jpg";
import img3 from "../../assets/images/desk3.jpg";
import img4 from "../../assets/images/lounge5.jpg";
import img5 from "../../assets/images/lounge6.jpg";
import img6 from "../../assets/images/lounge2.jpg";
import img7 from "../../assets/images/lounge3.jpg";
import img8 from "../../assets/images/lounge4.jpg";

const images = [img1, img2, img3, img4,img5,img6,img7,img8];

const BranchDouala = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#0f0c08] text-white">

        {/* HERO */}
        <section className="relative h-[80vh] flex items-end">
        <video
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={hero}
      autoPlay
      loop
      muted
      playsInline
    />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative z-10 px-6 md:px-16 pb-16 max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-button mb-3">
              Douala · Bonapriso
            </p>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
              Hôtel Prestige <br />
              <em className="text-button italic">La Principauté</em>
            </h1>

            <p className="text-gray-300 mt-4 text-sm">
              L’adresse incontournable où se rencontrent affaires, élégance et
              art de vivre au cœur de Douala.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-button mb-4">
              L’expérience
            </p>

            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Le luxe urbain <em className="text-button italic">réinventé</em>
            </h2>

            <div className="w-10 h-px bg-button mb-6" />

            <p className="text-gray-400 mb-6 leading-7">
              Situé à Bonapriso, l’un des quartiers les plus prisés de Douala,
              La Principauté est bien plus qu’un hôtel : c’est une signature.
              Un lieu où le confort rencontre la performance, pensé pour les
              voyageurs exigeants et les décideurs.
            </p>

            <p className="text-gray-400 leading-7">
              Ici, chaque détail est conçu pour offrir une expérience fluide,
              élégante et parfaitement adaptée au rythme de la ville.
            </p>

            {/* STATS */}
            <div className="flex gap-10 mt-8">
              <div>
                <p className="text-button text-2xl font-serif">20</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Chambres & suites
                </p>
              </div>

              <div>
                <p className="text-button text-2xl font-serif">3</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Espaces restauration
                </p>
              </div>

              <div>
                <p className="text-button text-2xl font-serif">24/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Service concierge
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={img1}
              className="w-full h-100 object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </div>
        </section>

        {/* GALLERY */}
        <section className="px-6 md:px-16 pb-20">

          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-button">
              Découvrir
            </p>

            <h2 className="text-3xl font-serif mt-3">
              L’univers <em className="text-button italic">La Principauté</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  className="w-full h-50 object-cover hover:scale-110 transition duration-700"
                  alt=""
                />
              </div>
            ))}
          </div>

        </section>

        {/* SERVICES */}
        <section className="px-6 md:px-16 py-20 bg-[#14100a]">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif mb-6">
              Pensé pour les <em className="text-button italic">exigeants</em>
            </h2>

            <p className="text-gray-400 mb-8">
              Que ce soit pour affaires ou pour le plaisir, chaque espace est conçu
              pour offrir performance, confort et élégance dans un environnement
              urbain dynamique.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
               
               [
                "Salles de conférence & espaces business",
                "Restaurant gastronomique",
                "Lounge & bar VIP",
                "Service premium 24/7",
                "À 5 minutes de l’aéroport international"
              ]
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-xs border border-button/20 px-4 py-2 uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="https://wa.me/+237694243888"
              target="_blank"
              className="inline-block bg-button text-black px-8 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
            >
              Réserver maintenant
            </a>
          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default BranchDouala;