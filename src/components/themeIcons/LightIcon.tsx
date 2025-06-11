export default function LightIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
    >
      {/* Słońce - środkowe koło */}
      <circle 
        cx="32" 
        cy="32" 
        r="12" 
        fill="currentColor"
      />
      
      {/* Promienie słońca */}
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="32" y1="7" x2="32" y2="13" />
        <line x1="32" y1="51" x2="32" y2="57" />
        <line x1="57" y1="32" x2="51" y2="32" />
        <line x1="13" y1="32" x2="7" y2="32" />
        <line x1="49.5" y1="14.5" x2="45.2" y2="18.8" />
        <line x1="18.8" y1="45.2" x2="14.5" y2="49.5" />
        <line x1="49.5" y1="49.5" x2="45.2" y2="45.2" />
        <line x1="18.8" y1="18.8" x2="14.5" y2="14.5" />
      </g>
    </svg>
  );
}