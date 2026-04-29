import ibiza from '../assets/images/ibiza.jpg'
const branches = [
    {
      city: "Douala",
      title: "Urban Prestige Hotel",
      desc: "Luxe urbain au cœur économique du Cameroun.",
      logo:ibiza
    },
    {
      city: "Bakassa",
      title: "Nature Retreat",
      desc: "Sanctuaire naturel exclusif et raffiné.",
      logo:ibiza
    },
    {
      city: "Lounge",
      title: "Prestige Experience",
      desc: "Expérience VIP la plus exclusive de Douala.",
      logo:ibiza
    },
  ];
  
  const Branches = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-[#14100a]">
  
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.5em] uppercase text-button">
            Trois destinations
          </div>
  
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f1e8]">
            Nos <em className="italic text-button">emplacements</em>
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
  
          {branches.map((b, i) => (
            <div
              key={i}
              className="relative h-125 group cursor-pointer overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-linear-to-br from-[#1a1208] to-[#0d0a06] group-hover:scale-105 transition duration-700"> <img src={b.logo} alt="branch image" /> </div>
  
              {/* Overlay */}
            
  
              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white">
  
                <div className="text-button text-[10px] tracking-[0.4em] mb-2">
                  0{i + 1}
                </div>
  
                <div className="text-[10px] tracking-[0.3em] uppercase text-button mb-2">
                  {b.city}
                </div>
  
                <h3 className="font-serif text-2xl mb-2">
                  {b.title}
                </h3>
  
                <p className="text-sm text-gray-400 mb-4">
                  {b.desc}
                </p>
  
                <span className="text-button text-[10px] tracking-[0.3em] uppercase border-b border-button/30">
                  Explorer →
                </span>
  
              </div>
            </div>
          ))}
  
        </div>
      </section>
    );
  };
  
  export default Branches;