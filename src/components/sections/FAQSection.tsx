import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: '契約・支払い',
      question: '請求書払いは可能ですか？',
      answer: '法人様向けに請求書払いに対応しております。与信審査の上、月末締め・翌月末払いなどの条件でご利用いただけます。詳しい条件はお問い合わせください。',
    },
    {
      category: '契約・支払い',
      question: '最低利用期間・解約金はありますか？',
      answer: '契約条件の詳細は、お見積り時にご説明いたします。ご不明な点はお気軽にお問い合わせください。',
    },
    {
      category: '導入',
      question: '複数拠点への導入は可能ですか？',
      answer: 'はい、複数拠点への導入も対応しております。台数や拠点数に応じたプランもご用意しておりますので、お気軽にご相談ください。',
    },
    {
      category: '導入',
      question: '設置工事は必要ですか？',
      answer: '大掛かりな工事は不要です。電源と水道（給水栓）があれば設置可能です。設置サポートも対応しておりますので、ご安心ください。',
    },
    {
      category: '運用',
      question: 'カートリッジの交換はどうすればいいですか？',
      answer: 'カートリッジは定期的にお届けします。交換作業は簡単で、ご自身で行っていただけます。交換方法は設置時にご説明いたします。',
    },
    {
      category: '運用',
      question: '日常的な清掃やメンテナンスは必要ですか？',
      answer: '注水口まわりの軽い拭き取り程度で十分です。タンク内はUV殺菌機能で清潔に保たれます。詳しいお手入れ方法は設置時にご案内します。',
    },
    {
      category: 'サポート',
      question: '故障した場合はどうなりますか？',
      answer: '故障の際は、サポート窓口にご連絡ください。状況に応じて、修理または交換対応いたします。代替機の手配も可能です。',
    },
    {
      category: 'その他',
      question: '移転や撤去の際はどうすればいいですか？',
      answer: '移転先への設置や撤去についても対応いたします。事前にご連絡いただければ、スムーズに手続きを進められます。',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeading
          title="よくあるご質問"
          subtitle="導入をご検討中の方からよくいただくご質問"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question w-full text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span
                    className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-base)', color: 'var(--color-text-secondary)' }}
                  >
                    {faq.category}
                  </span>
                  <span style={{ color: 'var(--color-text-primary)' }}>{faq.question}</span>
                </div>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--color-text-secondary)' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="faq-answer pl-20">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More questions */}
        <div className="text-center mt-10">
          <p
            className="text-sm mb-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            その他のご質問は、お気軽にお問い合わせください
          </p>
          <a href="#contact" className="btn-secondary">
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
