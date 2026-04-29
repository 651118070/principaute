const BrandStory = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  
          {/* IMAGE BLOCK */}
          <div className="relative flex flex-col gap-6">
  
            {/* Main visual */}
            <div className="flex items-center justify-center border border-button/20 p-10 relative">
              <svg
                width="120"
                height="120"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-80"
              >
                <rect x="10" y="10" width="60" height="60" stroke="#C9A96E" strokeWidth="0.5" />
                <rect
                  x="20"
                  y="20"
                  width="40"
                  height="40"
                  stroke="#C9A96E"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                />
                <circle cx="40" cy="40" r="8" stroke="#C9A96E" strokeWidth="0.5" />
                <line x1="10" y1="40" x2="30" y2="40" stroke="#C9A96E" strokeWidth="0.5" />
                <line x1="50" y1="40" x2="70" y2="40" stroke="#C9A96E" strokeWidth="0.5" />
                <line x1="40" y1="10" x2="40" y2="30" stroke="#C9A96E" strokeWidth="0.5" />
                <line x1="40" y1="50" x2="40" y2="70" stroke="#C9A96E" strokeWidth="0.5" />
              </svg>
            </div>
  
            {/* Accent block */}
            <div className="flex items-end p-4 border border-button/10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-button">
                Est. 2021 · Cameroon
              </span>
            </div>
  
            {/* decorative corner */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border border-button/30" />
          </div>
  
          {/* TEXT BLOCK */}
          <div>
  
            {/* Eyebrow */}
            <div className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-button mb-6">
              Notre héritage
            </div>
  
            {/* Title */}
            <h2 className="font-serif text-3xl md:text-5xl font-light text-[#f5f1e8] leading-tight mb-6">
              Né d’une vision de<br />
              <em className="italic text-button">l’excellence africaine</em>
            </h2>
  
            {/* gold line */}
            <div className="w-10 h-px bg-button mb-8" />
  
            {/* Paragraphs */}
            <p className="text-sm leading-7 text-gray-400 max-w-xl mb-6">
              La Principaute Hotel est né d’une conviction forte : le Cameroun mérite
              une hospitalité de luxe de niveau international. Depuis 2021, nous créons
              des expériences uniques mêlant élégance contemporaine et chaleur africaine.
            </p>
  
            <p className="text-sm leading-7 text-gray-400 max-w-xl mb-10">
              Chacune de nos destinations raconte une histoire différente — l’énergie urbaine
              de Douala, la sérénité de Bakassa et le prestige exclusif de nos espaces.
              Ensemble, elles forment une collection hôtelière d’exception.
            </p>
  
            {/* Button */}
            <button
              onClick={() => console.log("about")}
              className="border border-button text-button px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-button/10 transition"
            >
              Notre histoire →
            </button>
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full h-px bg-button/20 mt-20" />
      </section>
    );
  };
 export default BrandStory 
