interface CTABannerProps {
  variant?: 'default' | 'minimal';
}

const CTABanner = ({ variant = 'default' }: CTABannerProps) => {
  if (variant === 'minimal') {
    return (
      <div className="py-8 md:py-12 text-center" style={{ backgroundColor: 'var(--color-base)' }}>
        <div className="container">
          <p
            className="text-base md:text-lg mb-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            まずはお気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="btn-primary">
              導入相談・見積依頼
            </a>
            <a href="#contact" className="btn-secondary">
              資料請求
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="py-12 md:py-16"
      style={{
        background: 'linear-gradient(135deg, var(--color-accent-dark) 0%, var(--color-trust) 100%)',
      }}
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            オフィスの水環境を見直しませんか？
          </h3>
          <p className="text-white/70 mb-6">
            導入のご相談から設置まで、丁寧にサポートいたします。
            <br className="hidden md:block" />
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent-dark)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              導入相談・見積依頼
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              資料請求（無料）
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            お電話でのご相談：0120-XXX-XXX（平日 9:00-18:00）
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
