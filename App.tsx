import React, { useState, useEffect } from 'react';
import LeafBranch from './components/LeafBranch';
import CoffeeBeans from './components/CoffeeBeans';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const links = [
    { name: 'תפריט', href: '#' },
    { name: 'גלריה', href: '#' },
    { name: 'אירועים', href: '#' },
    { name: 'צור קשר', href: '#' },
  ];

  return (
    <main className="bg-[#67b96a] text-white w-full relative overflow-hidden pb-20 bg-textured">
      {/* Decorative elements with parallax effect */}
      <LeafBranch
        className="fixed top-0 left-0 w-2/5 md:w-1/4 lg:w-1/5 max-w-[300px] h-auto opacity-90 z-0"
        style={{ transform: `translateX(-25%) translateY(-25%) translateY(${scrollY * 0.3}px)` }}
      />
      <CoffeeBeans
        className="fixed top-0 right-0 w-1/4 md:w-1/6 lg:w-[12%] max-w-[150px] h-auto opacity-90 z-0"
        style={{ transform: `translateX(20%) translateY(-15%) translateY(${scrollY * 0.2}px) rotate(15deg)` }}
      />
      <CoffeeBeans
        className="fixed bottom-0 left-0 w-1/4 md:w-1/6 lg:w-[12%] max-w-[150px] h-auto opacity-90 z-0"
        style={{ transform: `translateX(-15%) translateY(20%) translateY(${-scrollY * 0.2}px) rotate(-10deg)` }}
      />
      <LeafBranch
        className="fixed bottom-0 right-0 w-2/5 md:w-1/4 lg:w-1/5 max-w-[300px] h-auto opacity-90 z-0"
        style={{ transform: `translateX(25%) translateY(25%) translateY(${-scrollY * 0.3}px) rotate(180deg)` }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 relative">
        <div className="z-10 flex flex-col items-center text-center w-full max-w-lg">
          {/* Logo Section */}
          <div className="w-full px-4 animate-logo">
            <div className="w-full h-0.5 bg-white/80 mb-3 sm:mb-4"></div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] sm:tracking-[0.3em] whitespace-nowrap py-2">
              בר-קפה
            </h1>
            <div className="w-full h-0.5 bg-white/80 mt-3 sm:mt-4"></div>
          </div>

          {/* Links Section */}
          <nav className="mt-12 sm:mt-16">
            <ul className="flex flex-col sm:flex-row gap-y-5 sm:gap-x-6 md:gap-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-lg md:text-xl text-white/90 hover:text-white px-6 py-2 border border-white/30 rounded-full bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Placeholder content to enable scrolling */}
      <section className="w-full max-w-3xl mx-auto p-8 z-10 relative mt-16">
        <h2 className="text-4xl font-bold mb-6 text-center text-white/90">אצלנו בבר-קפה</h2>
        <p className="text-xl text-center leading-relaxed text-white/80">
          מקום מפגש שכונתי עם אווירה ייחודית, קפה משובח ואוכל טרי וטעים. בואו ליהנות מרגע של שקט בלב העיר, לפתוח את הבוקר עם ארוחה מפנקת או לסיים את היום עם בירה קרה וחברים.
        </p>
      </section>
      <section className="w-full max-w-3xl mx-auto p-8 z-10 relative mt-10">
        <h2 className="text-4xl font-bold mb-6 text-center text-white/90">הסיפור שלנו</h2>
        <p className="text-xl text-center leading-relaxed text-white/80">
          הכל התחיל מחלום קטן - ליצור פינה חמה ונעימה שתשלב בין אהבה לקפה איכותי, אוכל טוב ואנשים. הקמנו את 'בר-קפה' כדי להיות הבית השני שלכם, המקום אליו תמיד כיף לחזור.
        </p>
      </section>
    </main>
  );
};

export default App;