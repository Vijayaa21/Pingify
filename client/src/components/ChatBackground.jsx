export default function ChatBackground() {
  return (
  <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
    {/* CSS Pattern for Space Doodles */}
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="doodle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
           {/* Stars */}
           <circle cx="10" cy="10" r="1" fill="white" />
           <circle cx="50" cy="80" r="1.5" fill="white" />
           <circle cx="90" cy="40" r="1" fill="white" />
           {/* Planet */}
           <circle cx="70" cy="20" r="5" stroke="white" strokeWidth="1" fill="none" />
           <path d="M 62 20 Q 70 26 78 20" stroke="white" strokeWidth="0.5" fill="none" />
           {/* Rocket simple */}
           <path d="M 20 60 L 25 50 L 30 60 Z" stroke="white" strokeWidth="1" fill="none"/>
           {/* Cloud */}
           <path d="M 60 70 Q 65 60 75 70 T 90 70" stroke="white" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
    </svg>
    
    {/* Floating larger elements */}
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
  </div>
);

}
