import Footer from "../../components/CTA";
import Navbar from "../../components/Navbar";

const BranchLounge = () => {
    return (
        <>
        <Navbar/>
        <div className="bg-[#0f0c08] text-white">
  
  <section className="relative min-h-[70vh] flex items-end px-6 md:px-16 py-20">
    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />

    <div className="relative z-10 max-w-xl">
      <p className="text-xs tracking-[0.4em] uppercase text-button mb-3">
        Douala
      </p>

      <h1 className="text-4xl md:text-6xl font-serif">
        Prestige <em className="text-button italic">Lounge</em>
      </h1>

      <p className="text-gray-400 mt-4">
        Le lieu VIP le plus exclusif de Douala.
      </p>
    </div>
  </section>

  <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">

    <div>
      <h2 className="text-3xl font-serif mb-6">
        L’art du <em className="text-button italic">prestige</em>
      </h2>

      <p className="text-gray-400">
        DJs internationaux, service VIP et ambiance unique.
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-2">
        {["VIP","DJ","Bar premium","Cigare"].map((item,i)=>(
          <span key={i} className="text-xs border border-button/20 px-3 py-1">{item}</span>
        ))}
      </div>

      <div className="mt-6 border border-button/20 p-4 text-sm text-gray-400">
        Jeudi – Samedi · 21h – 04h
      </div>

      <a
        href="https://wa.me/237694243888?text=Réservation Lounge"
        target="_blank"
        className="inline-block mt-6 bg-button text-black px-6 py-3 text-xs uppercase"
      >
        Réserver une table
      </a>
    </div>

  </section>

</div>
<Footer/>
        </>
    );
  };
  export default BranchLounge