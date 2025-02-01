import { Shield, Bot as Lotus, Flower2 } from 'lucide-react';

interface Teaching {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Teachings = () => {
  const teachings: Teaching[] = [
    {
      icon: <Shield className="w-6 h-6 text-indigo-600 animate-pulse" />,
      title: "魂の解放",
      description: "現代社会の束縛から解き放たれ、本来の自分を取り戻す道を示します。"
    },
    {
      icon: <Lotus className="w-6 h-6 text-indigo-600 animate-bounce" />,
      title: "真実の知識",
      description: "古来より伝わる秘密の教えと、現代科学では説明できない真理をお伝えします。"
    },
    {
      icon: <Flower2 className="w-6 h-6 text-indigo-600 animate-spin-slow" />,
      title: "新たな家族",
      description: "真実を知る者たちとの深い絆を築き、真の幸福を見つけることができます。"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto space-y-16">
        <h2 className="text-2xl md:text-3xl text-center tracking-wider text-gray-800">私たちの教え</h2>
        <div className="grid gap-12">
          {teachings.map((teaching, index) => (
            <div key={index} className="space-y-4 hover:transform hover:translate-x-2 transition-transform duration-300">
              <div className="flex items-center space-x-4">
                {teaching.icon}
                <h3 className="text-lg md:text-xl text-gray-700">{teaching.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-10">{teaching.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};