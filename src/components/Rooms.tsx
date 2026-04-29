import royale from '../assets/images/royale.jpg'
const Rooms = () => {
    const rooms = [
      {
        category: "Prestige",
        name: "Junior Suite",
        price: "À partir de 85,000 XAF / nuit",
        logo:royale
      },
      {
        category: "Royale",
        name: "Presidential Suite",
        price: "À partir de 250,000 XAF / nuit",
        logo:royale
      },
      {
        category: "Princesse",
        name: "Chambre Deluxe",
        price: "À partir de 55,000 XAF / nuit",
        logo:royale
      },
    ];
  
    return (
      <section className="py-24 px-6 md:px-16 bg-[#14100a]">
  
        {/* Header */}
        <div className="text-center">
          <div className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-button mb-6">
            Hébergements
          </div>
  
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#f5f1e8]">
            Chambres & <em className="italic text-button">Suites</em>
          </h2>
        </div>
  
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
  
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-button/10 h-85 bg-linear-to-br from-[#1a1208] to-[#0d0a06] cursor-pointer"
            >
              {/* hover zoom layer */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
  
              {/* dark overlay */}
              <img src={room.logo} alt="room photo category" />
  
              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-hover">
  
                {/* category */}
                <div className="text-[9px] tracking-[0.4em] uppercase text-button mb-2">
                  {room.category}
                </div>
  
                {/* name */}
                <h3 className="font-serif text-xl md:text-2xl font-light text-[#f5f1e8]">
                  {room.name}
                </h3>
  
                {/* bottom info */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-button/20">
  
                  <span className="text-[10px] tracking-[0.2em] text-button">
                    {room.price}
                  </span>
  
                  <button
                    onClick={() => console.log("view room")}
                    className="text-[9px] tracking-[0.3em] uppercase text-gray-400 border border-button/30 px-4 py-1 hover:text-button hover:border-button transition"
                  >
                    Voir
                  </button>
  
                </div>
              </div>
            </div>
          ))}
  
        </div>
  
        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-button text-black px-10 py-3 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[#d8bc7a] transition">
            Voir tous les hébergements
          </button>
        </div>
  
      </section>
    );
  };
  
  export default Rooms;