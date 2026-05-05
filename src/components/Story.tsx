import hotel from '../assets/images/about.jpg'
const BrandStory = () => {
    return (
      <section className="py-24 px-6 md:px-16 bg-[#0f0c08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  
          {/* IMAGE BLOCK */}
          <div className="relative flex flex-col gap-6">
            <img src={hotel} alt="hotel" />
          </div>
  
          {/* TEXT BLOCK */}
          <div>

{/* Eyebrow */}
<div className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-button mb-6">
  Notre héritage
</div>

{/* Title */}
<h2 className="font-serif text-3xl md:text-5xl font-light text-[#f5f1e8] leading-tight mb-6">
  Là où chaque séjour devient<br />
  <em className="italic text-button">une expérience inoubliable</em>
</h2>

{/* gold line */}
<div className="w-10 h-px bg-button mb-8" />

{/* Paragraphs */}
<p className="text-sm leading-7 text-gray-400 max-w-xl mb-6">
  Tout commence par une vision simple mais audacieuse : offrir au Cameroun une
  hospitalité où le luxe ne se regarde pas,il se vit. À La Principauté Hotel,
  chaque détail est pensé pour éveiller vos sens du confort de nos chambres
  à l’accueil chaleureux qui vous fait sentir immédiatement chez vous.
</p>

<p className="text-sm leading-7 text-gray-400 max-w-xl mb-10">
  Entre l’énergie vibrante de Douala, la tranquillité apaisante de Bakassa et
  l’élégance de nos espaces, nous ne proposons pas seulement un séjour, mais
  une parenthèse hors du temps. Ici, le raffinement rencontre l’authenticité
  africaine, pour vous offrir une expérience accessible, mémorable et profondément humaine.
</p>

</div>
        </div>
  
        {/* Divider */}
        <div className="w-full h-px bg-button/20 mt-20" />
      </section>
    );
  };
 export default BrandStory 
