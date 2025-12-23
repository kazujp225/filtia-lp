import SectionHeading from '../ui/SectionHeading';

const PricingSection = () => {
  const includedItems = [
    'サーバーレンタル料',
    'カートリッジ定期配送',
    'UV殺菌機能',
    '故障時交換対応',
  ];

  const contractTerms = [
    { label: '初期費用', value: '要確認' },
    { label: '最低利用期間', value: '要確認' },
    { label: '解約金', value: '要確認' },
    { label: '設置', value: '設置サポートあり' },
  ];

  return (
    <section id="pricing" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeading
          title="料金プラン"
          subtitle="シンプルな月額制。ボトル購入の手間もコストもありません"
        />

        <div className="max-w-3xl mx-auto">
          {/* Main pricing card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div
              className="p-8 text-center"
              style={{ backgroundColor: 'var(--color-accent-dark)' }}
            >
              <p className="text-white/80 text-sm mb-2">月額レンタル料金</p>
              <div className="flex items-end justify-center gap-1 text-white">
                <span className="text-5xl md:text-6xl font-bold">要確認</span>
                <span className="text-lg mb-2">円（税別）/月</span>
              </div>
              <p className="text-white/60 text-sm mt-2">
                ※正式な料金は個別にお見積りいたします
              </p>
            </div>

            <div className="p-8">
              {/* Included items */}
              <h4
                className="font-semibold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                月額に含まれるもの
              </h4>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contract terms */}
              <h4
                className="font-semibold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                ご契約条件
              </h4>
              <div
                className="rounded-lg p-4 mb-6"
                style={{ backgroundColor: 'var(--color-base)' }}
              >
                {contractTerms.map((term, index) => (
                  <div
                    key={index}
                    className={`flex justify-between py-2 ${
                      index < contractTerms.length - 1 ? 'border-b border-[var(--color-line)]' : ''
                    }`}
                  >
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {term.label}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                      {term.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* B2B specific */}
              <div
                className="rounded-lg p-4 border-2"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                    style={{ color: 'var(--color-accent)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <h5 className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                      法人様向けサービス
                    </h5>
                    <ul className="text-sm space-y-1" style={{ color: 'var(--color-text-secondary)' }}>
                      <li>・請求書払い対応（条件あり）</li>
                      <li>・複数台導入でのボリューム相談</li>
                      <li>・見積書・導入提案書のご用意</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why worth it */}
          <div className="mt-8 text-center">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: 'var(--color-text-primary)' }}
            >
              この価格で選ばれる理由
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'デザイン', desc: 'オフィス空間を高める' },
                { title: '安全根拠', desc: '稟議で説明できる' },
                { title: 'サポート', desc: '故障時も安心対応' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4"
                >
                  <p className="font-medium mb-1" style={{ color: 'var(--color-accent-dark)' }}>
                    {item.title}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a href="#contact" className="btn-primary">
              お見積りを依頼する
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
