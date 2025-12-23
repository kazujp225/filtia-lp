

const HeroSection = () => {
  const benefits = [
    { icon: '🔧', text: '工事不要' },
    { icon: '💧', text: '不純物除去※' },
    { icon: '✨', text: 'お手入れ簡単' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 md:py-0" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -right-1/4 w-full h-full rounded-full opacity-5"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <p
              className="text-sm md:text-base font-medium mb-4 animate-fade-in"
              style={{ color: 'var(--color-accent)', animationDelay: '0.1s' }}
            >
              法人向け浄水型ウォーターサーバー
            </p>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              空間に馴染む、
              <br />
              浄水という福利厚生。
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              オフィスの品位を保ちながら、安心・安全な水を。
              <br className="hidden md:block" />
              ボトル不要で運用の手間を最小限に。
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: 'var(--color-base)', color: 'var(--color-text-primary)' }}
                >
                  <span>{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                導入相談・見積依頼
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary text-center">
                資料請求（無料）
              </a>
            </div>

            {/* Phone */}
            <p className="mt-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              お急ぎの方はお電話でも：
              <a
                href="tel:0120-XXX-XXX"
                className="font-semibold ml-2 hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-text-primary)' }}
              >
                0120-XXX-XXX
              </a>
              <span className="text-xs ml-2">（平日 9:00-18:00）</span>
            </p>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Product image placeholder with SVG */}
              <div
                className="aspect-[3/4] rounded-2xl flex items-center justify-center p-8"
                style={{ backgroundColor: 'var(--color-base)' }}
              >
                <div className="flex gap-4 md:gap-8 items-end justify-center">
                  <div className="text-center group cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src="/images/fv-main.png"
                      alt="Filtia White"
                      className="h-56 md:h-64 mx-auto object-contain drop-shadow-xl"
                    />
                    <p className="text-xs mt-3 font-medium" style={{ color: 'var(--color-text-secondary)' }}>ホワイト</p>
                  </div>
                  <div className="text-center group cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                      src="/images/fv-main-black.png"
                      alt="Filtia Black"
                      className="h-56 md:h-64 mx-auto object-contain drop-shadow-xl"
                    />
                    <p className="text-xs mt-3 font-medium" style={{ color: 'var(--color-text-secondary)' }}>ブラック</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-xl shadow-lg p-4"
              >
                <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>選べる2カラー</p>
                <div className="flex gap-2">
                  <span className="w-6 h-6 rounded-full bg-white border-2 border-gray-200" />
                  <span className="w-6 h-6 rounded-full bg-gray-900" />
                </div>
              </div>

              {/* Type badge */}
              <div
                className="absolute -top-4 -right-4 md:-right-8 bg-white rounded-xl shadow-lg p-4"
              >
                <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>選べるタイプ</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  ロング / ショート
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text-secondary)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
