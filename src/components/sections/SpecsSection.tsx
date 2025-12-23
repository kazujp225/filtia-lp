import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProductPlaceholder from '../ui/ProductPlaceholder';

const SpecsSection = () => {
  const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

  const specs = {
    long: {
      name: 'ロングタイプ（床置き）',
      dimensions: '幅270mm × 奥行358mm × 高さ1,275mm',
      weight: '約18kg',
      tankCold: '約3.0L',
      tankHot: '約1.8L',
      tempCold: '約5〜10℃',
      tempHot: '約80〜90℃',
      power: '約500W',
      monthlyPower: '約500円/月※',
      cartridge: '6ヶ月交換目安',
      colors: ['ホワイト', 'ブラック'],
    },
    short: {
      name: 'ショートタイプ（卓上）',
      dimensions: '幅270mm × 奥行358mm × 高さ820mm',
      weight: '約15kg',
      tankCold: '約2.5L',
      tankHot: '約1.5L',
      tempCold: '約5〜10℃',
      tempHot: '約80〜90℃',
      power: '約450W',
      monthlyPower: '約450円/月※',
      cartridge: '6ヶ月交換目安',
      colors: ['ホワイト', 'ブラック'],
    },
  };

  const currentSpec = specs[activeTab];

  return (
    <section id="specs" className="section" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="container">
        <SectionHeading
          title="サーバー仕様"
          subtitle="設置場所に合わせて選べる2タイプ"
        />

        {/* Type selector */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('long')}
            className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all ${
              activeTab === 'long'
                ? 'bg-[var(--color-accent-dark)] text-white shadow-lg'
                : 'bg-white text-[var(--color-text-primary)] hover:bg-gray-50'
            }`}
          >
            ロングタイプ
            <span className="block text-sm opacity-70 mt-1">床置き</span>
          </button>
          <button
            onClick={() => setActiveTab('short')}
            className={`flex-1 py-4 px-6 rounded-xl font-medium transition-all ${
              activeTab === 'short'
                ? 'bg-[var(--color-accent-dark)] text-white shadow-lg'
                : 'bg-white text-[var(--color-text-primary)] hover:bg-gray-50'
            }`}
          >
            ショートタイプ
            <span className="block text-sm opacity-70 mt-1">卓上</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div
            className="aspect-[3/4] rounded-xl flex items-center justify-center bg-white p-8"
          >
            <div className="flex gap-8 items-end">
              <div className="text-center">
                <ProductPlaceholder
                  type={activeTab}
                  color="white"
                  className={activeTab === 'long' ? 'h-56 md:h-72' : 'h-40 md:h-52'}
                />
                <p className="text-sm mt-3" style={{ color: 'var(--color-text-secondary)' }}>
                  ホワイト
                </p>
              </div>
              <div className="text-center">
                <ProductPlaceholder
                  type={activeTab}
                  color="black"
                  className={activeTab === 'long' ? 'h-56 md:h-72' : 'h-40 md:h-52'}
                />
                <p className="text-sm mt-3" style={{ color: 'var(--color-text-secondary)' }}>
                  ブラック
                </p>
              </div>
            </div>
          </div>

          {/* Specs table */}
          <div className="bg-white rounded-xl overflow-hidden">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th>サイズ</th>
                  <td>{currentSpec.dimensions}</td>
                </tr>
                <tr>
                  <th>重量</th>
                  <td>{currentSpec.weight}</td>
                </tr>
                <tr>
                  <th>冷水タンク容量</th>
                  <td>{currentSpec.tankCold}</td>
                </tr>
                <tr>
                  <th>温水タンク容量</th>
                  <td>{currentSpec.tankHot}</td>
                </tr>
                <tr>
                  <th>冷水温度</th>
                  <td>{currentSpec.tempCold}</td>
                </tr>
                <tr>
                  <th>温水温度</th>
                  <td>{currentSpec.tempHot}</td>
                </tr>
                <tr>
                  <th>消費電力</th>
                  <td>{currentSpec.power}</td>
                </tr>
                <tr>
                  <th>電気代目安</th>
                  <td>{currentSpec.monthlyPower}</td>
                </tr>
                <tr>
                  <th>カートリッジ交換</th>
                  <td>{currentSpec.cartridge}</td>
                </tr>
                <tr>
                  <th>カラー</th>
                  <td>{currentSpec.colors.join(' / ')}</td>
                </tr>
              </tbody>
            </table>
            <p className="p-4 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              ※電気代目安は1日の使用量・環境により異なります。1kWh=27円で算出。
            </p>
          </div>
        </div>

        {/* Key points for SP */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '高さ', value: activeTab === 'long' ? '1,275mm' : '820mm' },
            { label: '電気代', value: currentSpec.monthlyPower },
            { label: '冷水', value: currentSpec.tempCold },
            { label: '温水', value: currentSpec.tempHot },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center"
            >
              <p className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                {item.label}
              </p>
              <p className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
