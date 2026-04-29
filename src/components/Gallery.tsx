const gallery = [
    "suite",
    "douala",
    "lounge",
    "bakassa",
    "presidential",
    "deluxe",
  ];
  
  const Gallery = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">
  
        {/* Title */}
        <div className="text-center mb-16">
          <div className="text-[10px] tracking-[0.5em] uppercase text-button">
            Visual Stories
          </div>
  
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f1e8]">
            The <em className="italic text-button">Gallery</em>
          </h2>
        </div>
  
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
  
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden cursor-pointer border border-button/10
                bg-[#14100a]
                hover:scale-[1.02] transition duration-500
                ${i === 0 ? "col-span-2 row-span-2 h-100" : "h-50"}
              `}
            >
  
              {/* image placeholder */}
              <div
                className={`absolute inset-0 bg-cover bg-center opacity-70`}
                style={{
                  backgroundImage: `url(/images/${item}.jpg)`,
                }}
              />
  
              {/* overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
  
              {/* label */}
              <div className="absolute bottom-4 left-4 text-buton text-[10px] tracking-[0.3em] uppercase">
                {item}
              </div>
  
            </div>
          ))}
  
        </div>
  
        {/* Button */}
        <div className="text-center mt-12">
          <button className="border border-button text-button px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-button/10 transition">
            Voir toute la galerie
          </button>
        </div>
  
      </section>
    );
  };
  
  export default Gallery;