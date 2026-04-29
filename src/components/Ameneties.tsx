const amenities = [
    { name: "Marriage" },
    { name: "Anniversaire" },
    { name: "Conciergerie 24/7" },
    { name: "Gastronomie Fine" },
    { name: "Transfert Aéroport" },
    { name: "Wi-Fi Premium" },
    { name: "Parking Sécurisé" },
    { name: "Centre de Bien-être" },
  ];
  
  const Amenities = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">
  
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.5em] uppercase text-button mb-4">
            Expériences sélectionnées
          </div>
  
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f1e8]">
            Services <em className="italic text-button">Premium</em>
          </h2>
        </div>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-button/10">
  
          {amenities.map((a, i) => (
            <div
              key={i}
              className="bg-[#14100a] hover:bg-[#1a140c] transition text-center p-8"
            >
              <div className="w-12 h-12 mx-auto mb-4 border border-button/30 flex items-center justify-center text-button">
                ✦
              </div>
  
              <div className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
                {a.name}
              </div>
            </div>
          ))}
  
        </div>
      </section>
    );
  };
  
  export default Amenities;