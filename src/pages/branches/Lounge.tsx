import Footer from "../../components/CTA";
import Navbar from "../../components/Navbar";

// IMAGES (optionnel mais recommandé)
import hero from "../../assets/images/ibiza.jpg";
import img1 from "../../assets/images/lounge10.jpg";
import img2 from "../../assets/images/lounge11.jpg";
import img3 from "../../assets/images/lounge12.jpg";
import img5 from "../../assets/images/lounge9.jpg";
import img4 from "../../assets/images/lounge13.jpg";

const images = [img1, img2, img3,img4,img5];

const BranchLounge = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#0f0c08] text-white">

        {/* HERO */}
        <section className="relative h-[80vh] flex items-end">
          <img
            src={hero}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent" />

          <div className="relative z-10 px-6 md:px-16 pb-16 max-w-2xl">
            <p className="text-xs tracking-[0.4em] uppercase text-button mb-3">
              Douala · Bonapriso
            </p>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
              Prestige <br />
              <em className="text-button italic">Lounge</em>
            </h1>

            <p className="text-gray-300 mt-4 text-sm">
              Le cercle privé le plus exclusif de Douala. Une expérience
              nocturne réservée à une élite.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-button mb-4">
              Expérience VIP
            </p>

            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              L’art du <em className="text-button italic">prestige nocturne</em>
            </h2>

            <div className="w-10 h-px bg-button mb-6" />

            <p className="text-gray-400 mb-6 leading-7">
              Le Prestige Lounge n’est pas un simple bar. C’est un univers
              sélectif où se rencontrent entrepreneurs, artistes et figures
              influentes de Douala.
            </p>

            <p className="text-gray-400 leading-7">
              Musique live, DJ internationaux, service premium et ambiance
              intimiste créent une expérience unique en Afrique centrale.
            </p>
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
              Ambiance
            </p>

            <h2 className="text-3xl font-serif mt-3">
              Une nuit <em className="text-button italic">inoubliable</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  className="w-full h-55 object-cover hover:scale-110 transition duration-700"
                  alt=""
                />
              </div>
            ))}
          </div>

        </section>

        {/* FEATURES */}
        <section className="px-6 md:px-16 py-20 bg-[#14100a]">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif mb-6">
              Une expérience <em className="text-button italic">exclusive</em>
            </h2>

            <p className="text-gray-400 mb-8">
              Chaque soirée est pensée comme un événement privé, où luxe,
              musique et service personnalisé créent une atmosphère unique.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "VIP tables privées",
                "DJ internationaux",
                "Cocktails signature",
                "Service bouteille premium",
                "Cigare lounge",
                "Sécurité discrète",
                "Ambiance sélective",
                "Événements privés",
              ].map((item, i) => (
                <span
                  key={i}
                  className="text-xs border border-button/20 px-4 py-2 uppercase tracking-wider"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* HOURS */}
            {/* <div className="mt-8 border border-button/20 p-4 text-sm text-gray-400">
              Jeudi – Samedi · 21h00 – 04h00 <br />
              Entrée sur réservation uniquement
            </div> */}

            {/* CTA */}
            <a
              href="https://wa.me/+237694243888"
              target="_blank"
              className="inline-block mt-8 bg-button text-black px-8 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition"
            >
              Réserver une table VIP
            </a>
          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default BranchLounge;