import Footer from "../components/CTA";
import Navbar from "../components/Navbar";
import royale from '../assets/images/royale.jpg'
import prestige from '../assets/images/prestige.jpg'
import princess from '../assets/images/princess.jpg'
const rooms = [
    {
      tag: "Royale",
      title: "suite Royale",
      desc: "Spacieuse et élégamment aménagée, la chambre Deluxe offre un équilibre parfait entre confort et raffinement. Rideaux pleine hauteur, literie premium et espace de travail dédié.",
      price: "À partir de 52 000 XAF / nuit",
      features: [ "Lit King Size", "Vue ville", "Salle de bain", "Espace de travail",'Wifi gratuit','Petit Dejeuner gratuit'],
      img:royale
    },
    {
      tag: "Princess",
      title: "suite Junior",
      desc: "Une suite généreuse avec salon séparé, minibar premium et vue panoramique. Idéale pour ceux qui recherchent plus d’espace et une expérience raffinée.",
      price: "À partir de 42 000 XAF / nuit",
      features: ["Vue panoramique", "Salon", "Wifi gratuit"],
      img:princess
    },
  
    {
      tag: "Prestige",
      title: "Chambre Deluxe",
      desc: "Le sommet du luxe. Une suite sur deux niveaux avec terrasse privée, service majordome et vue panoramique sur Douala.",
      price: "À partir de 32 000 XAF / nuit",
      features: [ "Wifi gratuit"],
      img:prestige
    },
  ];
  
  const amenities = [
    "Wi-Fi haut débit",
    "Climatisation",
    "TV écran plat",
    "Minibar premium",
    "Coffre-fort",
    "Service en chambre 24h/24",
    "Produits de toilette luxe",
    "Linge en coton égyptien",
    "Rideaux occultants",
    "Fer à repasser",
    "Peignoir & chaussons",
    "Menu d’oreillers",
  ];
  
  const Room = () => {
    return (
     <>
     <Navbar/>
     <div className="bg-[#0f0c08] text-white">
  
  {/* HERO */}
  <section className="relative py-32 text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,169,110,0.07),transparent)]" />
    <h1 className="text-4xl md:text-6xl font-serif">
      Chambres & <em className="text-button italic">Suites</em>
    </h1>
  </section>

  {/* ROOMS GRID */}
  <section className="px-6 md:px-16 py-20">
    
    <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
      Nos hébergements
    </p>

    <h2 className="text-3xl md:text-5xl font-serif mb-12">
      Une chambre pour chaque <em className="italic text-button">expérience</em>
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {rooms.map((room, i) => (
        <div
          key={i}
          className="border border-button/20 hover:border-button/40 transition overflow-hidden"
        >
          
          {/* IMAGE */}
          <div className="h-70 bg-linear-to-br from-[#1a1208] to-[#0d0a06] relative flex items-center justify-center">
            
            <img src={room.img} alt="rooms" />

            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
          </div>

          {/* BODY */}
          <div className="p-8">

            <p className="text-xs tracking-[0.3em] text-button mb-2">
              {room.tag}
            </p>

            <h3 className="text-2xl font-serif mb-3">
              {room.title}
            </h3>

            <p className="text-gray-400 text-sm leading-7 mb-4">
              {room.desc}
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-2 mb-6">
              {room.features.map((f, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-[0.2em] uppercase text-gray-400 border border-button/20 px-3 py-1"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* PRICE + CTA */}
            <div className="flex justify-between items-center">
              <span className="text-button font-serif">
                {room.price}
              </span>

              <button className="bg-button text-black px-5 py-2 text-xs tracking-[0.2em] uppercase hover:bg-[#d8bc7a] transition">
              <a href="https:wa.me/+237694243888">Réserver</a>
              </button>
            </div>

          </div>
        </div>
      ))}

    </div>

  </section>

  {/* AMENITIES */}
  <section className="px-6 md:px-16 py-20 bg-[#14100a] text-center">

    <p className="text-xs tracking-[0.4em] uppercase text-button mb-4">
      Dans chaque chambre
    </p>

    <h2 className="text-3xl md:text-5xl font-serif mb-10">
      Équipements <em className="italic text-button">standards</em>
    </h2>

    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {amenities.map((item, i) => (
        <span
          key={i}
          className="text-xs tracking-[0.2em] uppercase text-gray-400 border border-button/20 px-4 py-2"
        >
          {item}
        </span>
      ))}
    </div>

    <div className="mt-10">
      <button className="bg-button text-black px-8 py-3 uppercase text-xs tracking-[0.3em] hover:bg-[#d8bc7a] transition">
        Réserver votre suite
      </button>
    </div>

  </section>

</div>
<Footer/>
     </>
    );
  };
  
  export default Room;