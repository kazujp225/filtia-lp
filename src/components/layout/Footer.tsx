const Footer = () => {
  return (
    <footer className="bg-[var(--color-trust)] text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4">Filtia</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              法人向け浄水型ウォーターサーバー。
              <br />
              空間に馴染む、安心の水を。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white transition-colors">特徴</a></li>
              <li><a href="#safety" className="hover:text-white transition-colors">安全性</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">仕様</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">料金</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">法的情報</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Filtia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
