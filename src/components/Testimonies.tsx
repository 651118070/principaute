import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alain Mbarga",
    role: "Executive, Yaoundé",
    text: "Une expérience digne des plus grands hôtels de Paris ou Dubaï.",
  },
  {
    name: "Sophie Leclerc",
    role: "Consultante, Paris",
    text: "Bakassa est un sanctuaire de luxe et de calme absolu.",
  },
  {
    name: "Ibrahim Kouassi",
    role: "Entrepreneur, Abidjan",
    text: "?Ibiza Lounge est incomparable en Afrique Centrale.",
  },
  {
    name: "Nadine Tchinda",
    role: "Directrice Marketing, Douala",
    text: "Service irréprochable et ambiance exceptionnelle.",
  },
  {
    name: "Marc Olivier",
    role: "Businessman, Genève",
    text: "Un niveau de luxe rarement vu en Afrique.",
  },
  {
    name: "Aïcha Diop",
    role: "Designer, Dakar",
    text: "Chaque détail respire l’élégance et le raffinement.",
  },
  {
    name: "Thomas Keller",
    role: "Investor, London",
    text: "Simply one of the best hospitality experiences I’ve had.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">

      {/* HEADER */}
      <div className="text-center mb-16">
        <div className="text-[10px] tracking-[0.5em] uppercase text-button">
          Expériences clients
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-[#f5f1e8]">
          Témoignages <em className="italic text-button">premium</em>
        </h2>
      </div>

      {/* CAROUSEL */}
      <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  loop={true}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-14"
>
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#14100a] p-8 border border-button/10 h-full">

              {/* Stars */}
              <div className="text-button mb-4 tracking-widest">
                ★★★★★
              </div>

              {/* Text */}
              <p className="text-gray-300 italic font-serif mb-6 leading-relaxed">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-button/10 pt-4">
                <div className="text-button text-[10px] tracking-[0.3em] uppercase">
                  {t.name}
                </div>
                <div className="text-gray-500 text-xs">
                  {t.role}
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Testimonials;