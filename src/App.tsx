import React, { useState, useEffect } from 'react';
import { Eye, Sparkles, Moon, Sun, Heart, Star, Shield, Bot as Lotus, Flower2, X, MessageCircle, Popcorn as Urn } from 'lucide-react';

function App() {
  const [count, setCount] = useState(3642);
  const [inviteCode] = useState(Math.random().toString(36).substr(2, 9).toUpperCase());
  const [showModal, setShowModal] = useState(false);
  const [isEnlightened, setIsEnlightened] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [rejectionCount, setRejectionCount] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleEnlightenment = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setRejectionCount(prev => prev + 1);
    if (rejectionCount >= 2) {
      alert('あなたの魂が危険です。今すぐ真実を受け入れなければ、永遠の闇に落ちることになります。');
    }
    // モーダルは閉じない
  };

  const acceptTruth = () => {
    setIsEnlightened(true);
    setShowModal(false);
    setShowProducts(true);
    document.body.style.overflow = 'auto';
  };

  const products = [
    {
      name: '神聖な浄化の壺 - 基本',
      price: 1280000,
      description: '魂の浄化と心の安らぎをもたらす特別な壺。毎日の瞑想に最適。',
      features: ['基本的な浄化力', '心の安らぎ効果', '運気上昇']
    },
    {
      name: '至高の悟りの壺 - 上級',
      price: 2480000,
      description: '高次元の意識に到達するための究極の道具。真の覚醒者のために。',
      features: ['強力な浄化力', '精神統一促進', '金運上昇', '霊的防御力']
    },
    {
      name: '宇宙意識の壺 - 究極',
      price: 4980000,
      description: '選ばれし者のみが手にすることを許される伝説の壺。',
      features: ['最強の浄化力', '宇宙意識との接続', '全運気最大化', '永久の加護', '特別な祝福']
    }
  ];

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* ヘッダー */}
      <div className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center border-b z-50">
        <Eye className="w-6 h-6 text-gray-800 animate-pulse" />
      </div>

      {/* メインビジュアル */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center space-y-8 max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800 tracking-[0.2em] animate-tracking-in">
            真実の道
          </h1>
          <p className="text-lg md:text-xl text-gray-600 tracking-widest">
            招待コード: <span className="font-bold text-indigo-600 animate-pulse">{inviteCode}</span>
          </p>
          <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed tracking-wide">
            <p className="animate-slide-up">あなたは選ばれた存在です。</p>
            <p className="animate-slide-up delay-300">このページは、既に真実を知る者からの導きによってのみ辿り着くことができます。</p>
          </div>
        </div>
      </div>

      {/* セクション1: 現代社会への疑問 */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-2xl md:text-3xl text-center tracking-wider text-gray-800">現代社会の真実</h2>
          <div className="space-y-8 text-base md:text-lg text-gray-600">
            <p className="leading-relaxed hover:text-indigo-600 transition-colors duration-300">あなたは気付いているはずです。この世界の違和感に。</p>
            <p className="leading-relaxed hover:text-indigo-600 transition-colors duration-300">私たちは「真実」から遠ざけられています。</p>
            <p className="text-red-600 font-medium animate-pulse">なぜ、あなたは生まれてきたのでしょうか？</p>
            <p className="text-red-600 font-medium animate-pulse delay-500">この世界の本当の姿とは？</p>
          </div>
        </div>
      </section>

      {/* セクション2: 統計 */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <p className="text-xl md:text-2xl text-gray-700">
              すでに<span className="font-bold text-indigo-600 text-3xl md:text-4xl">{count}</span>人の仲間が
            </p>
            <p className="text-xl md:text-2xl text-gray-700">真実に目覚めています</p>
            <div className="flex justify-center space-x-4 md:space-x-8 py-8">
              <Moon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 transition-colors duration-300 hover:rotate-180 transform transition-transform duration-700" />
              <Sun className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 transition-colors duration-300 animate-spin-slow" />
              <Star className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 transition-colors duration-300 hover:scale-125 transform transition-transform duration-300" />
              <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 transition-colors duration-300 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: 教義 */}
      <section className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-2xl md:text-3xl text-center tracking-wider text-gray-800">私たちの教え</h2>
          <div className="grid gap-12">
            <div className="space-y-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <Shield className="w-6 h-6 text-indigo-600 animate-pulse" />
                <h3 className="text-lg md:text-xl text-gray-700">魂の解放</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                現代社会の束縛から解き放たれ、本来の自分を取り戻す道を示します。
              </p>
            </div>
            <div className="space-y-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <Lotus className="w-6 h-6 text-indigo-600 animate-bounce" />
                <h3 className="text-lg md:text-xl text-gray-700">真実の知識</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                古来より伝わる秘密の教えと、現代科学では説明できない真理をお伝えします。
              </p>
            </div>
            <div className="space-y-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <Flower2 className="w-6 h-6 text-indigo-600 animate-spin-slow" />
                <h3 className="text-lg md:text-xl text-gray-700">新たな家族</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">
                真実を知る者たちとの深い絆を築き、真の幸福を見つけることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {showProducts && (
        <section className="py-16 md:py-24 bg-gray-50 px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <h2 className="text-3xl text-center tracking-wider text-gray-800">神聖なる浄化の壺</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              古来より伝わる秘伝の技法で作られた特別な壺。
              あなたの人生を永遠に変える力を秘めています。
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
                  <div className="flex justify-center">
                    <Urn className="w-16 h-16 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-medium text-center text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-center">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-center text-indigo-600">
                    ¥{product.price.toLocaleString()}
                  </p>
                  <a
                    href="https://line.me/R/ti/p/@your-line-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 mt-4"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>LINEで相談する</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-red-600 animate-pulse">※在庫には限りがございます。お早めにご検討ください。</p>
              <p className="text-sm text-gray-500 mt-4">
                <a href="/legal" className="hover:text-indigo-600 underline">特定商取引法に基づく表記</a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-4 text-gray-600 italic">
            <p className="animate-fade-in">「目覚めよ、真実を知る者たちよ」</p>
            <p className="animate-fade-in delay-300">「世界の真理があなたを解放する」</p>
          </div>
          <button 
            onClick={handleEnlightenment}
            className="bg-white border-2 border-gray-800 text-gray-800 px-8 md:px-12 py-4 text-base md:text-lg tracking-widest hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group hover:scale-105"
          >
            <span>真実への扉を開く</span>
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
          </button>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-50 border-t py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs md:text-sm text-gray-500 tracking-widest">
            深夜零時・真実の扉が開かれる • 全てが明らかになる • 後戻りはできない
          </p>
          <p className="text-center text-xs text-gray-400 mt-4">
            ※このページは選ばれし者のみが閲覧できます
          </p>
        </div>
      </footer>

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg max-w-md w-full p-6 md:p-8 space-y-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center space-y-4">
              <Eye className="w-12 h-12 text-indigo-600 mx-auto animate-pulse" />
              <h3 className="text-xl md:text-2xl font-medium text-gray-800">真実を受け入れる準備はできていますか？</h3>
              <p className="text-gray-600">この先に進むと、あなたの人生は大きく変わります。</p>
              <div className="pt-4 space-y-3">
                <button
                  onClick={acceptTruth}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                >
                  はい、真実を受け入れます
                </button>
                <button
                  onClick={closeModal}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  まだ心の準備ができていません
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 啓発完了メッセージ */}
      {isEnlightened && (
        <div className="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
          あなたは真実の道を選びました
        </div>
      )}
    </div>
  );
}

export default App;