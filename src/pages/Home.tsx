import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Hero } from '../components/sections/Hero';
import { Statistics } from '../components/sections/Statistics';
import { Teachings } from '../components/sections/Teachings';
import { Products } from '../components/sections/Products';
import { CallToAction } from '../components/sections/CallToAction';
import { Modal } from '../components/common/Modal';
import { useEnlightenment } from '../hooks/useEnlightenment';

const Home = () => {
  const [inviteCode] = useState(Math.random().toString(36).substr(2, 9).toUpperCase());
  const {
    isEnlightened,
    showModal,
    handleEnlightenment,
    acceptTruth,
    closeModal
  } = useEnlightenment();

  return (
    <div className="min-h-screen bg-white font-serif">
      <Header />
      <Hero inviteCode={inviteCode} />
      <Statistics />
      <Teachings />
      {isEnlightened && <Products />}
      <CallToAction onEnlightenment={handleEnlightenment} />

      <Modal isOpen={showModal} onClose={closeModal}>
        <div className="text-center space-y-4">
          <Eye className="w-12 h-12 text-indigo-600 mx-auto animate-pulse" />
          <h3 className="text-xl md:text-2xl font-medium text-gray-800">
            真実を受け入れる準備はできていますか？
          </h3>
          <p className="text-gray-600">
            この先に進むと、あなたの人生は大きく変わります。
          </p>
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
      </Modal>

      {isEnlightened && (
        <div className="fixed bottom-4 right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
          あなたは真実の道を選びました
        </div>
      )}
    </div>
  );
};

export default Home;