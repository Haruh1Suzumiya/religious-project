import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b pb-4">
    <h2 className="text-lg font-medium text-gray-700 mb-2">{title}</h2>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          戻る
        </Link>
        
        <h1 className="text-2xl font-medium text-gray-800 mb-8">特定商取引法に基づく表記</h1>
        
        <div className="space-y-6">
          <LegalSection title="販売事業者名">
            <p>fuga</p>
          </LegalSection>

          <LegalSection title="所在地">
            <p>〒000-0000<br />東京都千代田区神秘町1-1-1</p>
          </LegalSection>

          <LegalSection title="連絡先">
            <p>
              電話: 03-0000-0000<br />
              メール: contact@example.com<br />
              ※お問い合わせはLINEでのみ受け付けております
            </p>
          </LegalSection>

          <LegalSection title="販売価格">
            <p>
              商品ページに記載の通り<br />
              ※表示価格は全て税込です
            </p>
          </LegalSection>

          <LegalSection title="支払方法">
            <p>
              - 銀行振込<br />
              - 現金<br />
              ※お支払い方法の詳細は、LINEにてご案内いたします
            </p>
          </LegalSection>

          <LegalSection title="引渡し時期">
            <p>
              ご入金確認後、神聖な儀式を経て、2週間以内に発送いたします。<br />
              ※時期により遅延する場合がございます
            </p>
          </LegalSection>

          <LegalSection title="返品・交換について">
            <p>
              神聖な商品のため、原則として返品・交換はお受けできません。<br />
              ※開運効果は個人差があります
            </p>
          </LegalSection>
        </div>
      </div>
    </div>
  );
};

export default Legal;