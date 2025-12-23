import SectionHeading from '../ui/SectionHeading';

const FlowSection = () => {
  const steps = [
    {
      number: '01',
      title: 'お問い合わせ',
      description: 'フォームまたはお電話でご連絡ください。資料請求・見積依頼・ご相談など、お気軽にどうぞ。',
      icon: <img src="/images/step-icon-1.svg" alt="お問い合わせ" className="w-8 h-8" />,
    },
    {
      number: '02',
      title: 'ヒアリング・ご提案',
      description: '設置台数、設置場所、ご予算などをヒアリング。最適なプランと正式なお見積りをご提示します。',
      icon: <img src="/images/step-icon-2.svg" alt="ヒアリング" className="w-8 h-8" />,
    },
    {
      number: '03',
      title: 'お届け・設置',
      description: 'サーバーをお届け。設置サポートも対応可能です。水道への接続は簡単な作業で完了します。',
      icon: <img src="/images/step-icon-3.svg" alt="お届け" className="w-8 h-8" />,
    },
    {
      number: '04',
      title: '運用開始',
      description: 'カートリッジは定期配送。故障時は交換対応。日々の運用で困ることがないようサポートします。',
      icon: <img src="/images/step-icon-4.svg" alt="運用開始" className="w-8 h-8" />,
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="container">
        <SectionHeading
          title="導入までの流れ"
          subtitle="お問い合わせから運用開始まで、スムーズにサポート"
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line - hidden on mobile */}
          <div
            className="hidden md:block absolute top-20 left-0 right-0 h-0.5"
            style={{ backgroundColor: 'var(--color-line)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Icon circle */}
                <div
                  className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-accent-dark)', color: 'white' }}
                >
                  {step.icon}
                </div>

                {/* Step number */}
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  STEP {step.number}
                </p>

                {/* Title */}
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline note */}
        <p
          className="text-center mt-10 text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          ※お問い合わせからお届けまで、通常1〜2週間程度。お急ぎの場合はご相談ください。
        </p>
      </div>
    </section>
  );
};

export default FlowSection;
