import Footer from "../../components/CTA";
import Navbar from "../../components/Navbar";

// IMPORT IMAGES
import hero from "../../assets/images/bakassa.mp4";
import img1 from "../../assets/images/about.jpg";
import img2 from "../../assets/images/about.jpg";
import img3 from "../../assets/images/about.jpg";
import img4 from "../../assets/images/about.jpg";

const images = [img1, img2, img3, img4];

const BranchBakassa = () => {
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
              Bakassa
            </p>

            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
              La Principauté<em className="text-button italic">Bakassa</em>
            </h1>

            <p className="text-gray-300 mt-4 text-sm">
              Un refuge rare où le luxe rencontre la sérénité de la nature
              camerounaise.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif mb-6">
              Une expérience{" "}
              <em className="text-button italic">hors du temps</em>
            </h2>

            <p className="text-gray-400 mb-6 leading-7">
              Nichée au cœur d’un paysage naturel préservé, Bakassa est bien
              plus qu’un hôtel. C’est une parenthèse. Un lieu où le silence, le
              confort et l’élégance s’unissent pour offrir une expérience rare.
            </p>

            <p className="text-gray-400 leading-7">
              Ici, chaque détail est pensé pour vous reconnecter à l’essentiel,
              sans jamais renoncer au luxe.
            </p>

            {/* STATS */}
            <div className="flex gap-10 mt-8">
              <div>
                <p className="text-button text-2xl font-serif">20</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Chalets privés
                </p>
              </div>

              <div>
                <p className="text-button text-2xl font-serif">2</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Hectares naturels
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
              Expérience visuelle
            </p>

            <h2 className="text-3xl font-serif mt-3">
              Explorez <em className="text-button italic">Bakassa</em>
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

        {/* EXPERIENCES */}
        <section className="px-6 md:px-16 py-20 bg-[#14100a]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif mb-6">
              Le luxe dans chaque{" "}
              <em className="text-button italic">instant</em>
            </h2>

            <p className="text-gray-400 mb-8">
            La Principauté Bakassa vous invite à ralentir. Ici, loin du bruit et de la
              pression, vous retrouvez une richesse rare : le calme, l’espace et
              l’authenticité. Promenades au cœur de paysages préservés,
              rencontres avec la culture locale, cuisine bio issue du terroir et
              moments suspendus sous les étoiles… chaque expérience est une
              invitation à vivre autrement. Un luxe discret, profondément
              humain, que seule la nature peut offrir.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Cuisine bio locale & expériences culinaires",
                "Soirées feu de camp & moments sous les étoiles",
                "Mariages intimistes en pleine nature",
                "Événements privés & anniversaires",
                "Séminaires & conférences en cadre apaisant",
                "Retraites bien-être & team building"
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

export default BranchBakassa;
