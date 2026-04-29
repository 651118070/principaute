const Footer = () => {
    return (
      <>
        {/* CTA */}
        <section className="py-24 px-6 text-center bg-[#0f0c08]">
  
          <div className="text-[10px] tracking-[0.5em] uppercase text-button mb-6">
            Commencez votre séjour
          </div>
  
          <h2 className="font-serif text-3xl md:text-5xl text-[#f5f1e8] mb-10">
            Prêt à vivre <br />
            <em className="italic text-button">le vrai luxe ?</em>
          </h2>
  
          <div className="flex flex-col md:flex-row justify-center gap-4">
  
            <a
              href="https://wa.me/237600000000"
              className="bg-[#25D366] text-white px-8 py-3 text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Nous écrire sur WhatsApp
            </a>
  
            <a
              href="tel:+237600000000"
              className="border border-button text-button px-8 py-3 text-[10px] tracking-[0.3em] uppercase hover:bg-button/10 transition"
            >
              Appeler maintenant
            </a>
  
          </div>
        </section>
  
        {/* FOOTER */}
        <footer className="bg-[#050403] border-t border-button/10 px-6 md:px-16 py-20">
  
          <div className="grid md:grid-cols-4 gap-10 mb-12">
  
            {/* Brand */}
            <div>
              <div className="text-button font-serif text-2xl mb-4">
                Prestige
              </div>
              <p className="text-gray-500 text-sm leading-7">
                Collection d’hôtels de luxe au Cameroun.
                Trois destinations. Un standard d’excellence.
              </p>
            </div>
  
            {/* Navigation */}
            <div>
              <h4 className="text-button text-[10px] tracking-[0.4em] uppercase mb-4">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Accueil</li>
                <li>Chambres</li>
                <li>Services</li>
                <li>Galerie</li>
              </ul>
            </div>
  
            {/* Destinations */}
            <div>
              <h4 className="text-button text-[10px] tracking-[0.4em] uppercase mb-4">
                Destinations
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Douala</li>
                <li>Bakassa</li>
                <li>Lounge Prestige</li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="text-button text-[10px] tracking-[0.4em] uppercase mb-4">
                Contact
              </h4>
              <p className="text-gray-500 text-sm leading-7">
                Douala, Cameroun<br />
                info@prestige.cm<br />
                +237 600 000 000
              </p>
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="border-t border-button/10 pt-6 flex justify-between text-xs text-gray-600">
  
            <span>© 2025 Prestige Hotels & Resorts</span>
  
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>LinkedIn</span>
            </div>
  
          </div>
  
        </footer>
      </>
    );
  };
  
  export default Footer;