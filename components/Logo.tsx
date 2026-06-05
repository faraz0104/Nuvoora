'use client';

export function Logo() {
  return (
    <a href="#top" aria-label="Nuvora" className="transition hover:opacity-90">
      <svg
        width="160"
        height="40"
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-aurora" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="0.45" stopColor="#6366f1" />
            <stop offset="1" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="logo-aurora2" x1="10" y1="60" x2="60" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="logo-wordmark" x1="80" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#c7d2fe" />
          </linearGradient>
        </defs>

        <g transform="translate(8,8)">
          <path
            d="M6 52 C 6 30, 22 14, 44 14"
            stroke="url(#logo-aurora2)"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          <path
            d="M14 56 C 14 32, 32 12, 58 12"
            stroke="url(#logo-aurora)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="58" cy="12" r="5.5" fill="#ec4899" />
          <circle cx="58" cy="12" r="5.5" fill="#ec4899" opacity="0.5" />
        </g>

        <text
          x="84"
          y="52"
          fontFamily="var(--font-syne), 'Trebuchet MS', sans-serif"
          fontSize="38"
          fontWeight="800"
          letterSpacing="-1.5"
          fill="url(#logo-wordmark)"
        >
          Nuvora
        </text>
      </svg>
    </a>
  );
}
