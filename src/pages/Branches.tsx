import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/CTA";
import douala from '../assets/images/about.jpg'
import ibiza from '../assets/images/ibiza.jpg'
import bakassa from '../assets/images/bakassa.png'
const branches = [
  {
    id: "01",
    name: "Hôtel La Principauté",
    location: "Douala · Bonapriso",
    desc: "Le confort exécutif au cœur du centre économique du Cameroun.",
    img: douala,
    link: "/douala",
  },
  {
    id: "02",
    name: "La Principauté Bakassa",
    location: "Bakassa",
    desc: "Un luxe rare en parfaite harmonie avec la nature.",
    img:bakassa ,
    link: "/bakassa",
  },
  {
    id: "03",
    name: "Ibiza Lounge",
    location: "Douala · Makepe",
    desc: "L’expérience sociale la plus exclusive de Douala.",
    img: ibiza,
    link: "/lounge",
  },
];

const Branches = () => {
  const navigate = useNavigate();

  return (
   <>
   <Navbar/>
   <section className="bg-[#0f0c08] text-white min-h-screen">

{/* HERO */}
<div className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    poster={bakassa}
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="src/assets/images/bakassa.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY (IMPORTANT pour lisibilité) */}
  <div className="absolute inset-0 bg-black/60" />

  {/* CONTENT */}
  <div className="relative z-10 px-6">
    <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white">
      Trois <em className="text-button italic">destinations</em>, <br />
      une seule signature
    </h1>
  </div>

</div>

{/* CONTENT */}
<div className="px-6 md:px-16 pb-20">

  <p className="text-[10px] tracking-[0.4em] uppercase text-button mb-4 text-center">
    Choisissez votre expérience
  </p>

  <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">
    Nos <em className="text-button italic">Branches</em>
  </h2>

  {/* GRID */}
  <div className="grid md:grid-cols-3 gap-6">

    {branches.map((branch) => (
      <div
        key={branch.id}
        onClick={() => navigate(branch.link)}
        className="relative h-105 cursor-pointer overflow-hidden group"
      >
        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover  bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${branch.img})` }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 z-10">

          <div className="text-5xl font-serif text-white">
            {branch.id}
          </div>

          <p className="text-[10px] tracking-[0.3em] uppercase text-button mt-2">
            {branch.location}
          </p>

          <h3 className="text-2xl font-serif mt-2 leading-tight">
            {branch.name}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            {branch.desc}
          </p>

          <span className="inline-block mt-4 text-[10px] tracking-[0.3em] uppercase text-button border-b border-button/30 group-hover:border-button transition">
           <Link to={branch.link}> Découvrir →</Link>
          </span>

        </div>
      </div>
    ))}

  </div>
</div>



</section>
<Footer/>
   </>
  );
};

export default Branches;