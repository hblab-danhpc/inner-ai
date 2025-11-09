interface LogoProps {
  variant?: "default" | "abstract" | "infinity";
  size?: number;
  showText?: boolean;
}

export default function Logo({ variant = "default", size = 64, showText = true }: LogoProps) {
  if (variant === "abstract") {
    return <AbstractLogo size={size} showText={showText} />;
  }
  if (variant === "infinity") {
    return <InfinityLogo size={size} showText={showText} />;
  }
  return <DefaultLogo size={size} showText={showText} />;
}

// Variation 1: Human head + glowing heart symbol
function DefaultLogo({ size, showText }: { size: number; showText: boolean }) {
  const symbolSize = showText ? size * 0.6 : size * 0.8;
  const totalHeight = showText ? size * 1.3 : size;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7A6F6" stopOpacity="1" />
            <stop offset="100%" stopColor="#7A68B6" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B7A6F6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer glow circle */}
        <circle cx="64" cy="64" r="62" fill="url(#headGradient)" opacity="0.1" />

        {/* Head silhouette */}
        <circle cx="64" cy="48" r="32" fill="url(#headGradient)" opacity="0.3" />

        {/* Head outline */}
        <circle cx="64" cy="48" r="32" fill="none" stroke="url(#headGradient)" strokeWidth="2" />

        {/* Neck */}
        <rect x="56" y="78" width="16" height="12" fill="url(#headGradient)" opacity="0.2" />

        {/* Heart glow background */}
        <circle cx="64" cy="68" r="20" fill="url(#heartGlow)" opacity="0.4" />

        {/* Heart shape */}
        <path
          d="M64 55 C64 50, 60 45, 54 45 C50 45, 46 48, 44 52 C46 48, 50 45, 54 45 C60 45, 64 50, 64 55 Z"
          fill="#FF6B9D"
          opacity="0.2"
        />
        <path
          d="M64 55 C64 50, 68 45, 74 45 C78 45, 82 48, 84 52 C82 48, 78 45, 74 45 C68 45, 64 50, 64 55 Z"
          fill="#FF6B9D"
          opacity="0.2"
        />

        {/* Heart center - main heart shape */}
        <path
          d="M 64 62 C 64 62, 48 50, 48 40 C 48 33, 53 28, 58 28 C 61 28, 64 30, 64 30 C 64 30, 67 28, 70 28 C 75 28, 80 33, 80 40 C 80 50, 64 62, 64 62 Z"
          fill="#7A68B6"
          filter="url(#glow)"
        />

        {/* Heart highlight */}
        <path
          d="M 64 62 C 64 62, 48 50, 48 40 C 48 33, 53 28, 58 28 C 61 28, 64 30, 64 30 C 64 30, 67 28, 70 28 C 75 28, 80 33, 80 40 C 80 50, 64 62, 64 62 Z"
          fill="none"
          stroke="#B7A6F6"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Brain wave lines */}
        <path d="M 40 50 Q 50 45, 60 50" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />
        <path d="M 68 50 Q 78 45, 88 50" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />
      </svg>

      {showText && (
        <h2 className="font-poppins font-bold text-xl" style={{ color: "#2E2E2E" }}>
          INNER.AI
        </h2>
      )}
    </div>
  );
}

// Variation 2: Abstract circular AI brain with soft light core
function AbstractLogo({ size, showText }: { size: number; showText: boolean }) {
  const symbolSize = showText ? size * 0.6 : size * 0.8;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B7A6F6" stopOpacity="1" />
            <stop offset="70%" stopColor="#7A68B6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7A68B6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7A6F6" />
            <stop offset="100%" stopColor="#7A68B6" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring - circuit pattern */}
        <circle cx="64" cy="64" r="60" fill="none" stroke="url(#outerRing)" strokeWidth="1.5" opacity="0.3" />

        {/* AI circuit nodes */}
        <circle cx="64" cy="20" r="3" fill="#B7A6F6" opacity="0.6" />
        <circle cx="107" cy="64" r="3" fill="#B7A6F6" opacity="0.6" />
        <circle cx="64" cy="108" r="3" fill="#B7A6F6" opacity="0.6" />
        <circle cx="21" cy="64" r="3" fill="#B7A6F6" opacity="0.6" />

        {/* Circuit lines */}
        <path d="M 64 23 Q 90 40, 104 64" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />
        <path d="M 104 64 Q 90 88, 64 105" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />
        <path d="M 64 105 Q 38 88, 24 64" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />
        <path d="M 24 64 Q 38 40, 64 23" fill="none" stroke="#B7A6F6" strokeWidth="1" opacity="0.4" />

        {/* Main circle structure */}
        <circle cx="64" cy="64" r="48" fill="none" stroke="#B7A6F6" strokeWidth="2" opacity="0.5" />
        <circle cx="64" cy="64" r="45" fill="none" stroke="#7A68B6" strokeWidth="1" opacity="0.3" />

        {/* Glowing core */}
        <circle cx="64" cy="64" r="28" fill="url(#coreGlow)" filter="url(#softGlow)" />

        {/* Inner light rays */}
        <line x1="64" y1="42" x2="64" y2="36" stroke="#B7A6F6" strokeWidth="1.5" opacity="0.5" />
        <line x1="82" y1="64" x2="88" y2="64" stroke="#B7A6F6" strokeWidth="1.5" opacity="0.5" />
        <line x1="64" y1="86" x2="64" y2="92" stroke="#B7A6F6" strokeWidth="1.5" opacity="0.5" />
        <line x1="46" y1="64" x2="40" y2="64" stroke="#B7A6F6" strokeWidth="1.5" opacity="0.5" />

        {/* Center spark */}
        <circle cx="64" cy="64" r="6" fill="#B7A6F6" opacity="0.8" filter="url(#softGlow)" />
      </svg>

      {showText && (
        <h2 className="font-poppins font-bold text-xl" style={{ color: "#2E2E2E" }}>
          INNER.AI
        </h2>
      )}
    </div>
  );
}

// Variation 3: Minimal line-based infinity symbol shaped like a heart
function InfinityLogo({ size, showText }: { size: number; showText: boolean }) {
  const symbolSize = showText ? size * 0.6 : size * 0.8;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={symbolSize}
        height={symbolSize}
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B7A6F6" />
            <stop offset="100%" stopColor="#7A68B6" />
          </linearGradient>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="1" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Infinity symbol shaped like interconnected hearts */}
        {/* Left heart loop */}
        <path
          d="M 32 64 C 32 48, 24 40, 16 40 C 8 40, 0 48, 0 60 C 0 76, 32 90, 32 90 C 32 90, 32 76, 32 64"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lineGlow)"
          opacity="0.8"
          transform="translate(16, 0)"
        />

        {/* Right heart loop */}
        <path
          d="M 32 64 C 32 48, 40 40, 48 40 C 56 40, 64 48, 64 60 C 64 76, 32 90, 32 90 C 32 90, 32 76, 32 64"
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#lineGlow)"
          opacity="0.8"
          transform="translate(32, 0)"
        />

        {/* Center connection glow */}
        <circle cx="64" cy="64" r="8" fill="#B7A6F6" opacity="0.3" filter="url(#lineGlow)" />
        <circle cx="64" cy="64" r="4" fill="#B7A6F6" opacity="0.6" />
      </svg>

      {showText && (
        <h2 className="font-poppins font-bold text-xl" style={{ color: "#2E2E2E" }}>
          INNER.AI
        </h2>
      )}
    </div>
  );
}
