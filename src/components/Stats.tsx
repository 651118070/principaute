export const Stats = () => {
    const data = [
      { num: "5+", label: "Années d’excellence" },
      { num: "98%", label: "Satisfaction client" },
      { num: "3", label: "Destinations premium" },
      { num: "85%", label: "Clients fidèles" },
    ];
  
    return (
      <section className="bg-[#0f0c08] border-y border-button/15">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative text-center py-10 px-6"
            >
              {/* Vertical separator (like your CSS ::after) */}
              {index !== data.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-button/20" />
              )}
  
              {/* Number */}
              <div className="font-serif text-4xl md:text-5xl font-light text-button  leading-none">
                {item.num}
              </div>
  
              {/* Label */}
              <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-400 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Stats;