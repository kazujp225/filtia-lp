
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [activeColor, setActiveColor] = useState<'white' | 'black'>('white');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const benefits = [
    { icon: '🔧', text: '工事不要', sub: '届いたその日から' },
    { icon: '💧', text: '不純物除去※', sub: '安心の浄水能力' },
    { icon: '✨', text: 'お手入れ簡単', sub: 'セルフメンテOK' },
  ];

  return (
    <section className="relative w-full h-[100dvh] min-h-[800px] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* 1. Immersive Dynamic Background (Vibrant & Gorgeous) */}
      <div className="absolute inset-0 z-0">
        {/* Alive Gradient Mesh */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply transition-all duration-[2000ms]"
          style={{
            background: activeColor === 'white'
              ? 'radial-gradient(at 0% 0%, #2EC4B6 0px, transparent 50%), radial-gradient(at 100% 0%, #E0F2F5 0px, transparent 50%), radial-gradient(at 100% 100%, #D4AF37 0px, transparent 50%)'
              : 'radial-gradient(at 0% 0%, #0F4C5C 0px, transparent 50%), radial-gradient(at 100% 100%, #1A202C 0px, transparent 50%)'
          }}
        />

        {/* Animated Particles/Orbs */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] mix-blend-screen opacity-60 animate-pulse ${activeColor === 'white' ? 'bg-cyan-200' : 'bg-teal-900'}`} style={{ animationDuration: '4s' }} />
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse delay-1000 ${activeColor === 'white' ? 'bg-amber-100' : 'bg-slate-800'}`} style={{ animationDuration: '7s' }} />
      </div>

      <div className="container relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">

          {/* Left: Content (Major Impact) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left pt-20 lg:pt-0 z-20">
            {/* Badge */}
            <div className="inline-block mb-6 md:mb-10">
              <span className="px-8 py-3 rounded-full glass border border-white/50 bg-white/30 backdrop-blur-xl text-sm font-bold tracking-[0.2em] uppercase text-slate-800 shadow-lg animate-fade-in">
                Premium Water Server
              </span>
            </div>

            {/* Main Title - Serif for Luxury */}
            <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-slate-900 drop-shadow-sm">
              <span className="block mb-2">Pure</span>
              <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500 pb-2">
                Elegance
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
              空間に溶け込む、美しい浄水体験。<br />
              オフィスの品格を高める、<br className="md:hidden" />
              新しい選択肢を。
            </p>

            {/* High-End CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#contact" className="btn-primary group !bg-gradient-to-r !from-teal-600 !to-cyan-600 !shadow-cyan-500/30 !px-10 !py-5 !text-lg !rounded-full text-white inline-flex items-center justify-center gap-2">
                <span>View Plans</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#contact" className="px-10 py-5 rounded-full glass border border-slate-300 text-slate-700 font-bold hover:bg-white/60 transition-all flex items-center gap-2 justify-center">
                Download Brochure
              </a>
            </div>

            {/* Glass Benefits */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {benefits.map((b, i) => (
                <div key={i} className="glass bg-white/40 p-3 rounded-2xl text-center min-w-[100px] backdrop-blur-md border border-white/60 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-xs font-bold text-slate-700">{b.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product (Gamen Ippai / Full Height) */}
          <div className="lg:col-span-7 h-[50vh] lg:h-full relative flex items-center justify-center">
            {/* Huge Circle Backdrop */}
            <div className="absolute w-[60vh] h-[60vh] lg:w-[80vh] lg:h-[80vh] rounded-full border border-white/20 bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm" />

            {/* Product Image - Dominating vertically */}
            <div className="relative w-full h-[100%] flex items-center justify-center -mt-10 lg:mt-0 transition-all duration-700">
              <img
                src={activeColor === 'white' ? "/images/fv-main.png" : "/images/fv-main-black.png"}
                alt="Filtia Premium"
                className={`max-h-[85%] lg:max-h-[90%] w-auto object-contain drop-shadow-2xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.2))'
                }}
              />
            </div>

            {/* Elegant Color Switcher */}
            <div className="absolute bottom-10 right-4 lg:right-10 flex flex-col gap-4 z-30">
              <button
                onClick={() => setActiveColor('white')}
                className={`w-12 h-12 rounded-full border-2 transition-all ${activeColor === 'white' ? 'border-teal-500 scale-110 shadow-lg shadow-teal-500/20' : 'border-white/50 bg-white/50 hover:bg-white/80'}`}
                aria-label="Select White Model"
              >
                <div className="w-full h-full rounded-full bg-white border-2 border-transparent" />
              </button>
              <button
                onClick={() => setActiveColor('black')}
                className={`w-12 h-12 rounded-full border-2 transition-all ${activeColor === 'black' ? 'border-teal-500 scale-110 shadow-lg shadow-teal-500/20' : 'border-slate-400/50 bg-slate-900/10 hover:bg-slate-900/20'}`}
                aria-label="Select Black Model"
              >
                <div className="w-full h-full rounded-full bg-slate-900 border-2 border-transparent" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
