import { useState } from "react";
import Footer from "../components/CTA";
import Navbar from "../components/Navbar";

/* ================= IMAGES ================= */

import lounge from "../assets/images/ibiza.jpg";
import desk from "../assets/images/desk.jpg";
import desk1 from "../assets/images/desk1.jpg";
import resto from "../assets/images/resto1.jpg";
import desk3 from "../assets/images/desk3.jpg";
import royale from "../assets/images/royale.jpg";
import prestige from "../assets/images/prestige.jpg";
import princess from "../assets/images/princess.jpg";

import lounge2 from "../assets/images/lounge2.jpg";
import lounge3 from "../assets/images/lounge3.jpg";
import lounge4 from "../assets/images/lounge4.jpg";
import lounge5 from "../assets/images/lounge5.jpg";
import lounge6 from "../assets/images/lounge6.jpg";
import lounge7 from "../assets/images/lounge7.jpg";
import lounge8 from "../assets/images/lounge8.jpg";
import lounge9 from "../assets/images/lounge9.jpg";
import lounge10 from "../assets/images/lounge10.jpg";
import lounge11 from "../assets/images/lounge11.jpg";
import lounge12 from "../assets/images/lounge12.jpg";
import lounge13 from "../assets/images/lounge13.jpg";

/* ================= TYPES ================= */

type Category = "tout" | "chambres" | "restauration" | "lounge";

type GalleryItem = {
  id: number;
  label: string;
  cat: "rooms" | "dining" | "lounge";
  size?: "tall" | "wide" | "";
  img: string;
};

/* ================= DATA ================= */

const galleryData: GalleryItem[] = [
  { id: 1, label: "Suite Présidentielle", cat: "rooms", img: royale },

  { id: 2, label: "Restaurant", cat: "dining", img: desk },
  { id: 3, label: "Restaurant", cat: "dining", img: desk1 },
  { id: 4, label: "Restaurant", cat: "dining", img: resto },
  { id: 5, label: "Restaurant", cat: "dining", img: desk3 },

  { id: 6, label: "Lounge", cat: "lounge", img: lounge5 },
  { id: 7, label: "Ibiza Lounge", cat: "lounge", img: lounge },

  { id: 8, label: "Lounge", cat: "lounge", img: lounge2 },
  { id: 9, label: "Lounge", cat: "lounge", img: lounge3 },
  { id: 10, label: "Lounge", cat: "lounge", img: lounge4 },

  { id: 11, label: "Lounge", cat: "lounge", img: lounge6 },
  { id: 12, label: "Lounge", cat: "lounge", img: lounge7 },
  { id: 13, label: "Lounge", cat: "lounge", img: lounge8 },
  { id: 14, label: "Lounge", cat: "lounge", img: lounge9 },
  { id: 15, label: "Lounge", cat: "lounge", img: lounge10 },
  { id: 16, label: "Lounge", cat: "lounge", img: lounge11 },
  { id: 17, label: "Lounge", cat: "lounge", img: lounge12 },
  { id: 18, label: "Lounge", cat: "lounge", img: lounge13 },

  { id: 19, label: "Chambre Deluxe", cat: "rooms", img: prestige },
  { id: 20, label: "Suite Princess", cat: "rooms", img: princess },
];

/* ================= MAP ================= */

const categoryMap: Record<Category, GalleryItem["cat"] | "all"> = {
  tout: "all",
  chambres: "rooms",
  restauration: "dining",
  lounge: "lounge",
};

/* ================= FILTERS ================= */

const filters: Category[] = ["tout", "chambres", "lounge", "restauration"];

/* ================= COMPONENT ================= */

export default function Gallery() {
  const [active, setActive] = useState<Category>("tout");

  /* ===== FILTER ===== */
  const filtered =
    active === "tout"
      ? galleryData
      : galleryData.filter((item) => item.cat === categoryMap[active]);

  return (
    <>
      <Navbar />

      <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] uppercase text-yellow-500">
            Histoires visuelles
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#f5f1e8] mt-3">
            La <em className="text-yellow-500 italic">Galerie</em>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[10px] tracking-[0.3em] uppercase px-4 py-2 border transition
                ${
                  active === f
                    ? "text-yellow-500 border-yellow-500 bg-yellow-500/10"
                    : "text-gray-400 border-yellow-500/20 hover:text-yellow-500"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

          {filtered.map((item) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden cursor-pointer border border-yellow-500/10
                bg-[#14100a] transition duration-500 group
                ${item.size === "tall" ? "row-span-2 h-100" : "h-50"}
                ${item.size === "wide" ? "col-span-2" : ""}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition" />

              {/* LABEL */}
              <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.3em] uppercase text-yellow-500 opacity-0 group-hover:opacity-100 transition">
                {item.label}
              </div>
            </div>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}