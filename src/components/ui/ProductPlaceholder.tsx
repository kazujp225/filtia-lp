interface ProductPlaceholderProps {
  type?: 'long' | 'short';
  color?: 'white' | 'black';
  className?: string;
}

const ProductPlaceholder = ({
  type = 'long',
  color = 'white',
  className = '',
}: ProductPlaceholderProps) => {
  const height = type === 'long' ? 280 : 200;
  const bodyColor = color === 'white' ? '#f3f4f6' : '#374151';
  const accentColor = color === 'white' ? '#e5e7eb' : '#4b5563';

  return (
    <svg
      viewBox="0 0 120 300"
      className={className}
      style={{ maxHeight: height }}
    >
      {/* Base/Stand */}
      <rect x="25" y={type === 'long' ? 260 : 180} width="70" height="8" rx="2" fill={accentColor} />

      {/* Body */}
      <rect x="30" y="40" width="60" height={type === 'long' ? 220 : 140} rx="4" fill={bodyColor} />

      {/* Top panel */}
      <rect x="35" y="50" width="50" height="30" rx="2" fill={accentColor} />

      {/* Display */}
      <rect x="40" y="55" width="40" height="20" rx="1" fill="#0F4C5C" opacity="0.3" />

      {/* Hot water button */}
      <circle cx="45" cy="100" r="8" fill="#ef4444" opacity="0.6" />

      {/* Cold water button */}
      <circle cx="75" cy="100" r="8" fill="#3b82f6" opacity="0.6" />

      {/* Dispenser area */}
      <rect x="45" y="120" width="30" height="40" rx="2" fill={accentColor} />

      {/* Drip tray */}
      <rect x="35" y={type === 'long' ? 240 : 160} width="50" height="15" rx="2" fill={accentColor} />

      {/* Water drops decoration */}
      <circle cx="60" cy="135" r="3" fill="#4BA3B6" opacity="0.5" />
      <circle cx="55" cy="142" r="2" fill="#4BA3B6" opacity="0.3" />
      <circle cx="65" cy="140" r="2" fill="#4BA3B6" opacity="0.4" />
    </svg>
  );
};

export default ProductPlaceholder;
