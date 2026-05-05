import Footer from "../../components/CTA";
import Navbar from "../../components/Navbar";

const BranchDouala = () => {
    return (
   <>
   <Navbar/>
   <div className="bg-[#0f0c08] text-white">
  
  {/* HERO */}
  <section className="relative min-h-[70vh] flex items-end px-6 md:px-16 py-20">
    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />

    <div className="relative z-10 max-w-xl">
      <p className="text-xs tracking-[0.4em] uppercase text-button mb-3">
        Douala · Akwa
      </p>

      <h1 className="text-4xl md:text-6xl font-serif leading-tight">
        Hôtel Prestige <br />
        <em className="text-button italic">Luxe Urbain</em>
      </h1>

      <p className="text-gray-400 mt-4 text-sm">
        Là où les voyageurs d’affaires et amateurs de luxe se rencontrent au cœur de Douala.
      </p>
    </div>
  </section>

  {/* CONTENT */}
  <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">

    {/* LEFT */}
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-button mb-4">L’expérience</p>

      <h2 className="text-3xl md:text-5xl font-serif mb-6">
        Luxe urbain <em className="text-button italic">réinventé</em>
      </h2>

      <div className="w-10 h-px bg-button mb-6" />

      <p className="text-gray-400 mb-6">
        Situé à Akwa, l’adresse incontournable pour les voyageurs internationaux.
        48 chambres raffinées, restaurants haut de gamme et piscine rooftop.
      </p>

      <div className="flex gap-8">
        <div><p className="text-button text-2xl">48</p><p className="text-xs text-gray-500">Chambres</p></div>
        <div><p className="text-button text-2xl">3</p><p className="text-xs text-gray-500">Restaurants</p></div>
        <div><p className="text-button text-2xl">24/7</p><p className="text-xs text-gray-500">Concierge</p></div>
      </div>
    </div>

    {/* RIGHT */}
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-button mb-4">Équipements</p>

      <h2 className="text-3xl md:text-5xl font-serif mb-6">
        Tout est <em className="text-button italic">inclus</em>
      </h2>

      <div className="w-10 h-px bg-button mb-6" />

      <div className="flex flex-wrap gap-2">
        {["Piscine rooftop","Spa","Salle de sport","Navette aéroport"].map((item,i)=>(
          <span key={i} className="text-xs border border-button/20 px-3 py-1 text-gray-400">{item}</span>
        ))}
      </div>

      <a
        href="https://wa.me/237694243888?text=Réservation Douala"
        target="_blank"
        className="inline-block mt-8 bg-button text-black px-6 py-3 text-xs uppercase"
      >
        Réserver
      </a>
    </div>

  </section>

</div>
<Footer/>
   </>
    );
  };
  export default BranchDouala