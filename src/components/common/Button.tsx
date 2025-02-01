import { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

export const Button = ({ onClick, children, variant = 'primary', icon = false }: ButtonProps) => {
  const baseClasses = "px-8 md:px-12 py-4 text-base md:text-lg tracking-widest transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group hover:scale-105";
  
  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span>{children}</span>
      {icon && <Sparkles className="w-5 h-5 group-hover:animate-spin" />}
    </button>
  );
};