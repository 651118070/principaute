import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <div className="bg-[#0f0c08] text-[#f5f1e8]">
  
        {/* HERO */}
        <div className="pt-60 text-center bg-[url('./assets/images/contact.jpg')] bg-cover h-[70vh]">
          <h1 className="font-serif text-4xl md:text-6xl">
            Réservation & <br />
            <em className="text-button">Contact</em>
          </h1>
        </div>
  
        {/* GRID */}
        <section className="py-24 px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16">
  
            {/* LEFT INFO */}
            <div className="space-y-8">
  
              <div>
                <div className="text-[10px] tracking-[0.5em] uppercase text-button">
                  Nous contacter
                </div>
  
                <h2 className="font-serif text-3xl md:text-4xl mt-2">
                  Nous sommes là <br /> pour <em className="text-button">vous</em>
                </h2>
  
                <div className="w-12 h-px bg-button mt-4" />
              </div>
  
              {/* CONTACT INFO */}
              {[
                {
                  label: "Téléphone",
                  value: "+237 600 000 000\n+237 699 000 000",
                },
                {
                  label: "WhatsApp",
                  value: "+237 600 000 000\nDisponible 24h/24",
                },
                {
                  label: "Email",
                  value: "info@prestige.cm\nreservations@prestige.cm",
                },
                {
                  label: "Adresse",
                  value: "Akwa, Douala\nCameroun",
                },
              ].map((item, i) => (
                <div key={i} className="border-l border-button/30 pl-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-button">
                    {item.label}
                  </div>
                  <p className="text-sm text-gray-300 whitespace-pre-line">
                    {item.value}
                  </p>
                </div>
              ))}
  
              {/* WHATSAPP BTN */}
              <a
                href="https://wa.me/237600000000"
                className="bg-[#25D366] text-white px-6 py-3 text-[10px] tracking-[0.3em] uppercase flex justify-center gap-2 hover:scale-105 transition"
              >
                Chat WhatsApp
              </a>
  
            </div>
  
            {/* RIGHT FORM */}
            <div>
  
              <div className="text-[10px] tracking-[0.5em] uppercase text-button">
                Formulaire
              </div>
  
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-6">
                Envoyer un <em className="text-button">message</em>
              </h2>
  
              <div className="space-y-4">
  
                <div className="grid md:grid-cols-2 gap-4">
                  <input className="bg-[#14100a] border border-button/20 p-3 text-sm" placeholder="Nom complet" />
                  <input className="bg-[#14100a] border border-button/20 p-3 text-sm" placeholder="Téléphone" />
                </div>
  
                <input className="bg-[#14100a] border border-button/20 p-3 text-sm w-full" placeholder="Email" />
  
                <select className="bg-[#14100a] border border-button/20 p-3 text-sm w-full">
                  <option>Choisir une destination</option>
                  <option>Douala</option>
                  <option>Bakassa</option>
                  <option>Lounge</option>
                </select>
  
                <textarea
                  className="bg-[#14100a] border border-button/20 p-3 text-sm w-full h-32"
                  placeholder="Votre message..."
                />
  
                <button className="bg-button text-black px-6 py-3 text-[10px] tracking-[0.3em] uppercase w-full hover:bg-[#d8bc7a] transition">
                  Envoyer la demande
                </button>
  
                <p className="text-xs text-gray-500">
                  Réponse sous 2h en journée / 6h hors horaires
                </p>
  
              </div>
            </div>
  
          </div>
        </section>
  
        {/* MAP */}
        <div className="px-6 md:px-16 pb-20">
          <div className="bg-[#14100a] border border-button/10 h-75 flex items-center justify-center text-center">
            <div>
             
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9680858498987!2d9.699447322742012!3d4.026926897134656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611371628f4c09%3A0x872c9baddacfc49a!2sHOTEL%20LA%20PRINCIPAUT%C3%89%3Aun%20sejour%20formidable%2C%20je%20vous%20recommande%20vivement%20cet%20espace!5e0!3m2!1sen!2scm!4v1777481224471!5m2!1sen!2scm" width="600" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
  
        {/* FOOTER CTA */}
        <div className="text-center py-12 border-t border-button/10">
          <Link to='/' className="text-button text-xs tracking-[0.3em] uppercase">
            ← Retour à l’accueil
          </Link>
        </div>
  
      </div>
    );
  };
  
  export default Contact;