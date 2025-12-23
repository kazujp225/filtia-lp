import { useState, type FormEvent } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    prefecture: '',
    inquiryType: '',
    quantity: '',
    location: '',
    timing: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const prefectures = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
    '岐阜県', '静岡県', '愛知県', '三重県',
    '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section" style={{ backgroundColor: 'var(--color-accent-dark)' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <svg className="w-16 h-16 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              お問い合わせありがとうございます
            </h2>
            <p className="text-white/80 mb-6">
              担当者より、1営業日以内にご連絡いたします。
              <br />
              しばらくお待ちください。
            </p>
            <p className="text-sm text-white/60">
              自動返信メールをお送りしています。届かない場合は迷惑メールフォルダをご確認ください。
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-accent-dark)' }}>
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            お問い合わせ・資料請求
          </h2>
          <p className="text-white/70">
            導入相談・お見積り・資料請求など、お気軽にお問い合わせください
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8">
            {/* Required fields */}
            <div className="space-y-5 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    会社名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="株式会社〇〇"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="山田 太郎"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="example@company.co.jp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    電話番号 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="03-1234-5678"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    設置都道府県 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="prefecture"
                    required
                    value={formData.prefecture}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value="">選択してください</option>
                    {prefectures.map(pref => (
                      <option key={pref} value={pref}>{pref}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    ご希望 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value="">選択してください</option>
                    <option value="estimate">見積依頼</option>
                    <option value="consultation">導入相談</option>
                    <option value="document">資料請求</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  導入台数 <span className="text-red-500">*</span>
                </label>
                <select
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                >
                  <option value="">選択してください</option>
                  <option value="1">1台</option>
                  <option value="2-4">2〜4台</option>
                  <option value="5-10">5〜10台</option>
                  <option value="11+">11台以上</option>
                </select>
              </div>
            </div>

            {/* Optional fields */}
            <div
              className="space-y-5 pt-6 mb-8 border-t"
              style={{ borderColor: 'var(--color-line)' }}
            >
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                以下は任意項目です
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    設置場所
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value="">選択してください</option>
                    <option value="reception">受付</option>
                    <option value="meeting">会議室</option>
                    <option value="break">休憩スペース</option>
                    <option value="other">その他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    導入時期
                  </label>
                  <select
                    name="timing"
                    value={formData.timing}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  >
                    <option value="">選択してください</option>
                    <option value="asap">今すぐ</option>
                    <option value="1month">1ヶ月以内</option>
                    <option value="3months">3ヶ月以内</option>
                    <option value="undecided">未定</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  備考
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] resize-none"
                  placeholder="ご質問やご要望があればご記入ください"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  送信中...
                </>
              ) : (
                <>
                  送信する
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            <p className="mt-4 text-xs text-center" style={{ color: 'var(--color-text-secondary)' }}>
              <a href="#" className="underline hover:no-underline">プライバシーポリシー</a>に同意の上、送信してください。
            </p>
          </form>

          {/* Phone */}
          <div className="text-center mt-8 text-white">
            <p className="text-sm text-white/70 mb-2">お急ぎの方はお電話でも</p>
            <a
              href="tel:0120-XXX-XXX"
              className="text-2xl font-semibold hover:opacity-80 transition-opacity"
            >
              0120-XXX-XXX
            </a>
            <p className="text-xs text-white/50 mt-1">平日 9:00-18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
