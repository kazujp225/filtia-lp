import { useState } from 'react';

const SafetySection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: '高性能フィルター',
      description: 'JIS規格に基づき、遊離残留塩素をはじめとする不純物を除去。安心してお使いいただけます。',
      note: '※除去物質・除去率は試験条件により異なります',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'UV殺菌機能',
      description: 'タンク内のUV殺菌により、清潔な状態を維持。定期的な自動殺菌で衛生的な水をお届けします。',
      note: '※殺菌効果は使用条件により異なります',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '衛生設計',
      description: '二重フタ構造、抗菌素材の採用など、衛生面を考慮した設計。毎日安心してお使いいただけます。',
      note: null,
    },
  ];

  const removalItems = [
    '遊離残留塩素',
    '総トリハロメタン',
    'クロロホルム',
    'ブロモジクロロメタン',
    'ジブロモクロロメタン',
    'ブロモホルム',
    'テトラクロロエチレン',
    'トリクロロエチレン',
    '1,1,1-トリクロロエタン',
    'CAT（農薬）',
    '2-MIB（カビ臭）',
    '溶解性鉛',
  ];

  return (
    <section id="safety" className="section" style={{ backgroundColor: 'var(--color-trust)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            安心・安全の根拠
          </h2>
          <p className="text-base md:text-lg text-white/70">
            「なぜ安全か」を仕組みで説明できる
          </p>
        </div>

        {/* Main features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-2">
                {feature.description}
              </p>
              {feature.note && (
                <p className="text-xs text-white/50">
                  {feature.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Filtration diagram */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
          <h3
            className="text-lg font-semibold mb-6 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            浄水の仕組み
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {['水道水', 'フィルター', 'タンク', 'UV殺菌', '浄水'].map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{
                    backgroundColor: index === 4 ? 'var(--color-accent)' : 'var(--color-base)',
                    color: index === 4 ? 'white' : 'var(--color-text-primary)'
                  }}
                >
                  {step}
                </div>
                {index < 4 && (
                  <svg className="w-6 h-6 hidden md:block" style={{ color: 'var(--color-line)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Removal items */}
        <div className="bg-white rounded-xl p-6 md:p-8">
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            主な除去対象物質
          </h3>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${!isExpanded ? 'max-h-24 overflow-hidden' : ''}`}>
            {removalItems.map((item, index) => (
              <div
                key={index}
                className="text-sm py-2 px-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-base)', color: 'var(--color-text-primary)' }}
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm font-medium flex items-center gap-2 mx-auto"
            style={{ color: 'var(--color-accent)' }}
          >
            {isExpanded ? '閉じる' : 'すべて見る'}
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <p className="mt-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
            ※除去率・除去性能は、JIS S 3201の試験方法に基づく試験結果によります。使用状況により効果は異なります。
          </p>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
