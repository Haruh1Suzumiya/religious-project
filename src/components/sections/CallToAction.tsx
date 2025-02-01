import { Button } from '../common/Button';

interface CallToActionProps {
  onEnlightenment: () => void;
}

export const CallToAction = ({ onEnlightenment }: CallToActionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        <div className="space-y-4 text-gray-600 italic">
          <p className="animate-fade-in">「目覚めよ、真実を知る者たちよ」</p>
          <p className="animate-fade-in delay-300">「世界の真理があなたを解放する」</p>
        </div>
        <Button onClick={onEnlightenment} variant="secondary" icon>
          真実への扉を開く
        </Button>
      </div>
    </section>
  );
};