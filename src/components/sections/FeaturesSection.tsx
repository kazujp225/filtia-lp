import SectionHeading from '../ui/SectionHeading';

const FeaturesSection = () => {
  const features = [
    {
      number: '01',
      title: '冷水・温水がすぐ使える',
      description: '会議中の急なお茶出し、来客対応、休憩時間のコーヒー。いつでもすぐに適温の水が使えます。',
      image: '/images/office-scene-2.png',
    },
    {
      number: '02',
      title: 'ボトル不要で管理が消える',
      description: '水道直結だから、ボトルの受け取り・保管・交換・廃棄が一切不要。総務の手間を大幅に削減。',
      image: '/images/fv-main-black.png',
    },
    {
      number: '03',
      title: '清潔を保つ仕組み',
      description: 'UV殺菌、二重フタ構造など、衛生を保つ設計。「なぜ清潔か」を根拠を持って説明できます。',
      image: '/images/fv-main.png',
    },
    {
      number: '04',
      title: '工事不要で置くだけ',
      description: '電源と水道があればすぐ設置。大掛かりな工事は不要なので、移転時も安心です。',
      image: '/images/office-scene-2.png',
    },
    {
      number: '05',
      title: '空間に馴染むデザイン',
      description: 'ミニマルなデザインと白・黒のカラー展開。オフィス空間の品位を損なわず、むしろ高めます。',
      image: '/images/office-scene-1.png',
    },
  ];

  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeading
          title="Filtiaが選ばれる理由"
          subtitle="高価格帯でも選ばれる、5つの理由"
        />

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span
                  className="text-4xl md:text-5xl font-bold opacity-10"
                  style={{ color: 'var(--color-accent-dark)' }}
                >
                  {feature.number}
                </span>
                <h3
                  className="text-xl md:text-2xl font-semibold mt-2 mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div
                  className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
                  style={{ backgroundColor: 'var(--color-base)' }}
                >
                  <img
                    src={feature.image || ''}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
