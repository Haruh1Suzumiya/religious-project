import { Eye } from 'lucide-react';

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-sm flex items-center justify-center border-b z-50">
      <Eye className="w-6 h-6 text-gray-800 animate-pulse" />
    </div>
  );
};