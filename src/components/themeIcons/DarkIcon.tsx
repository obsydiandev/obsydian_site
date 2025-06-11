export default function DarkIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      {/* Księżyc z mocniejszym kolorem i delikatnym cieniem */}
      <ellipse
        cx="36"
        cy="28"
        rx="16"
        ry="16"
        fill="#22223b"
        filter="url(#moonShadow)"
      />
      <path
        d="M45 20C45 35.464 32.464 48 17 48C21.29 48 25.29 46.83 28.64 44.82C37.68 39.64 44 29.77 44 18.18C44 16.12 43.76 14.12 43.32 12.2C44.12 14.64 45 17.24 45 20Z"
        fill="#f6e27a"
        stroke="#bfae3c"
        strokeWidth="1.2"
      />
      <defs>
        <filter id="moonShadow" x="10" y="10" width="44" height="44" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>
      {/* Wyraźniejsze gwiazdy - starburst */}
      <g>
        {/* Duża gwiazda */}
        <g>
          <circle cx="12" cy="16" r="2.7" fill="#fffbe7" stroke="#bfae3c" strokeWidth="0.7" />
          <polygon points="12,11.2 12.7,15.2 16.7,16 12.7,16.8 12,20.8 11.3,16.8 7.3,16 11.3,15.2" fill="#fffbe7" opacity="0.7" />
        </g>
        {/* Średnia gwiazda */}
        <g>
          <circle cx="56" cy="28" r="2.3" fill="#fffbe7" stroke="#bfae3c" strokeWidth="0.6" />
          <polygon points="56,25.2 56.5,27.5 58.8,28 56.5,28.5 56,30.8 55.5,28.5 53.2,28 55.5,27.5" fill="#fffbe7" opacity="0.7" />
        </g>
        {/* Małe gwiazdy - jeszcze większe i wypełnione */}
        <g>
          <circle cx="52" cy="12" r="3.2" fill="#f6e27a" stroke="#bfae3c" strokeWidth="0.9" />
        </g>
        <g>
          <circle cx="8" cy="36" r="3.2" fill="#f6e27a" stroke="#bfae3c" strokeWidth="0.9" />
        </g>
        <g>
          <circle cx="20" cy="8" r="3.2" fill="#f6e27a" stroke="#bfae3c" strokeWidth="0.9" />
        </g>
        <g>
          <circle cx="48" cy="52" r="2.1" fill="#fffbe7" stroke="#bfae3c" strokeWidth="0.5" />
          <polygon points="48,49.5 48.4,51.2 50.1,52 48.4,52.8 48,54.5 47.6,52.8 45.9,52 47.6,51.2" fill="#fffbe7" opacity="0.7" />
        </g>
      </g>
    </svg>
  );
}