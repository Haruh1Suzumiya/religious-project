import { Moon, Sun, Star, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Statistics = () => {
  const [count, setCount] = useState(3642);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <p className="text-xl md:text-2xl text-gray-700">
            すでに<span className="font-bold text-indigo-600 text-3xl md:text-4xl">{count}</span>人の仲間が
          </p>
          <p className="text-xl md:text-2xl text-gray-700">真実に目覚めています</p>
          <div className="flex justify-center space-x-4 md:space-x-8 py-8">
            <Moon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 transform hover:rotate-180 transition duration-700" />
            <Sun className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 animate-spin-slow" />
            <Star className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 hover:scale-125 transition duration-300" />
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-600 hover:text-indigo-600 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};