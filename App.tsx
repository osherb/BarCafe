import React from 'react';

const App: React.FC = () => {
  // Updated links based on the user request
  const menuButtons = [
    { text: 'לקחת - רוקח 58', href: 'https://tbit.be/QzYY95' },
    { text: 'קח/שב - רוקח 58', href: '#' },
    { text: 'לקחת - רשי 23', href: 'https://tbit.be/XtuwqD' },
    { text: 'קח/שב - רשי 23', href: '#' },
  ];

  return (
    <main className="bg-[#67b96a] text-black w-full min-h-screen relative overflow-hidden flex flex-col items-center py-12 px-4">
      {/* Main Content Container */}
      <div className="z-10 w-full max-w-md flex flex-col items-center gap-10 mt-4 sm:mt-10">
        
        {/* Logo - Circular Stamp */}
        <div className="animate-logo relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[3px] border-black flex flex-col items-center justify-center shrink-0 bg-transparent">
          {/* Inner ring */}
          <div className="absolute inset-2 rounded-full border-[1.5px] border-black"></div>
          
          <div className="w-[65%] h-[2px] bg-black mb-2"></div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-wider text-black z-10 px-2 leading-none pb-1 pt-0 text-center font-rubik">
             בר-קפה
          </h1>
          <div className="w-[65%] h-[2px] bg-black mt-2"></div>
        </div>

        {/* Buttons Section */}
        <div className="w-full flex flex-col gap-5">
          {menuButtons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              className="group relative w-full block"
            >
              {/* Button Container */}
              <div className="w-full bg-[#82e886] hover:bg-[#72d876] border-[4px] border-white rounded-full py-4 px-6 shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
                 <span className="text-xl sm:text-2xl font-black text-black tracking-wide text-center">
                   {btn.text}
                 </span>
              </div>
              
              {/* Inner highlight for 'plastic/glass' feel */}
              <div className="absolute top-[8px] left-[20px] right-[20px] h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-full pointer-events-none"></div>
            </a>
          ))}
        </div>

      </div>
    </main>
  );
};

export default App;