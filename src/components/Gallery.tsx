import { Link } from "react-router-dom";
import ibiza from "../assets/images/ibiza.jpg";
import lounge1 from "../assets/images/lounge1.jpg";
import lounge2 from "../assets/images/lounge2.jpg";
import lounge6 from "../assets/images/lounge6.jpg";
import royale from "../assets/images/royale.jpg";
import princess from "../assets/images/princess.jpg";
const gallery = [
  { img: ibiza },
  { img: lounge1 },
  { img: lounge2 },
  { img: lounge6 },
  { img: royale },
  { img: princess },
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
              group
              ${i === 0 ? "col-span-2 row-span-2 h-100" : "h-50"}
            `}
          >

            {/* IMAGE */}
            <img
  src={item.img}
  alt="gallery"
  className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-80"
/>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          

          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="border rounded-full border-button text-button px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-button/10 transition">
          <Link to='/gallery'>Voir toute la galerie</Link>
        </button>
      </div>

    </section>
  );
};

export default Gallery;