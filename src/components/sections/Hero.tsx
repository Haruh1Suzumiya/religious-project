interface HeroProps {
    inviteCode: string;
  }
  
  export const Hero = ({ inviteCode }: HeroProps) => {
    return (
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
            <p className="animate-slide-up delay-300">
              このページは、既に真実を知る者からの導きによってのみ辿り着くことができます。
            </p>
          </div>
        </div>
      </div>
    );
  };