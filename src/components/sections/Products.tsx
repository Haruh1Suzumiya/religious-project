import { Star, Popcorn as Urn, MessageCircle } from 'lucide-react';
import { PRODUCTS, LINE_URL } from '../../constants/products';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
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
      href={LINE_URL}
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
);

export const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl text-center tracking-wider text-gray-800">神聖なる浄化の壺</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          古来より伝わる秘伝の技法で作られた特別な壺。
          あなたの人生を永遠に変える力を秘めています。
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={index} product={product} />
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
  );
};