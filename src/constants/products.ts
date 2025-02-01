import { Product } from '../types';

export const PRODUCTS: Product[] = [
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

export const LINE_URL = 'https://line.me/R/ti/p/@your-line-id';