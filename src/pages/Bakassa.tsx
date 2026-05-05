const BranchBakassa = () => {
    return (
      <div className="bg-[#0f0c08] text-white">
  
        <section className="relative min-h-[70vh] flex items-end px-6 md:px-16 py-20">
          <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent" />
  
          <div className="relative z-10 max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-button mb-3">
              Bakassa
            </p>
  
            <h1 className="text-4xl md:text-6xl font-serif">
              Retraite <em className="text-button italic">Nature</em>
            </h1>
  
            <p className="text-gray-400 mt-4">
              Un sanctuaire exclusif au cœur de la nature camerounaise.
            </p>
          </div>
        </section>
  
        <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">
  
          <div>
            <h2 className="text-3xl font-serif mb-6">
              Nature sans <em className="text-button italic">compromis</em>
            </h2>
  
            <p className="text-gray-400 mb-6">
              Chalets privés, spa en plein air et cuisine locale bio.
            </p>
  
            <div className="flex gap-8">
              <div><p className="text-button text-2xl">24</p><p className="text-xs text-gray-500">Chalets</p></div>
              <div><p className="text-button text-2xl">40</p><p className="text-xs text-gray-500">Hectares</p></div>
            </div>
          </div>
  
          <div>
            <div className="flex flex-wrap gap-2">
              {["Spa","Piscine","Yoga","Nature"].map((item,i)=>(
                <span key={i} className="text-xs border border-button/20 px-3 py-1">{item}</span>
              ))}
            </div>
  
            <a
              href="https://wa.me/237694243888?text=Réservation Bakassa"
              target="_blank"
              className="inline-block mt-8 bg-button text-black px-6 py-3 text-xs uppercase"
            >
              Réserver
            </a>
          </div>
  
        </section>
  
      </div>
    );
  };
  export default BranchBakassa