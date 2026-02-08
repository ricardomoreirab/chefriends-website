const COLORS: Record<string, string> = {
  '.': 'transparent',
  'W': '#FFFFFF',
  'w': '#E8E8E8',
  'O': '#FF6B35',
  'o': '#CC5529',
  'G': '#4ade80',
}

// Chef hat with subtle details - 10x9 pixel grid
const HAT_PIXELS = [
  '....WW....',   // tuft
  '...WWWW...',   // puff top
  '..WWWWWW..',   // puff mid
  '.WwWWWWwW.',   // puff wide (w = subtle shadow)
  '.WWWWWWWW.',   // puff base
  'OOOOOOOOOO',   // band top
  '.OoOOOOoO.',   // band detail (o = darker accent)
  '..OOOOOO..',   // band bottom
  '...OOOO...',   // base
]

// Small sparkle/star for accent
const SPARKLE_PIXELS = [
  '.G.',
  'GGG',
  '.G.',
]

interface PixelLogoProps {
  variant?: 'icon' | 'full' | 'compact'
  size?: number
  className?: string
}

const PixelLogo = ({ variant = 'full', size = 4, className = '' }: PixelLogoProps) => {
  const hatWidth = HAT_PIXELS[0].length
  const hatHeight = HAT_PIXELS.length

  const renderPixelGrid = (pixels: string[], pixelSize: number, offsetX = 0, offsetY = 0) => {
    return pixels.flatMap((row, y) =>
      row.split('').map((pixel, x) => {
        const color = COLORS[pixel]
        if (!color || color === 'transparent') return null
        return (
          <rect
            key={`${offsetX + x}-${offsetY + y}`}
            x={(offsetX + x) * pixelSize}
            y={(offsetY + y) * pixelSize}
            width={pixelSize}
            height={pixelSize}
            fill={color}
          />
        )
      })
    )
  }

  if (variant === 'icon') {
    // Icon only - hat with sparkle
    const totalWidth = hatWidth + 2
    const totalHeight = hatHeight + 1
    return (
      <svg
        width={totalWidth * size}
        height={totalHeight * size}
        viewBox={`0 0 ${totalWidth * size} ${totalHeight * size}`}
        className={`image-pixelated ${className}`}
        style={{ imageRendering: 'pixelated' }}
      >
        {renderPixelGrid(HAT_PIXELS, size, 1, 1)}
        {/* Sparkle accent */}
        <rect x={0} y={0} width={size} height={size} fill={COLORS.G} opacity={0.8}>
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
        </rect>
      </svg>
    )
  }

  if (variant === 'compact') {
    // Hat + "CF" text style for very small spaces
    const totalWidth = hatWidth + 2
    const totalHeight = hatHeight + 1
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg
          width={totalWidth * size}
          height={totalHeight * size}
          viewBox={`0 0 ${totalWidth * size} ${totalHeight * size}`}
          className="image-pixelated"
          style={{ imageRendering: 'pixelated' }}
        >
          {renderPixelGrid(HAT_PIXELS, size, 1, 1)}
          <rect x={0} y={0} width={size} height={size} fill={COLORS.G} opacity={0.8}>
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
          </rect>
        </svg>
        <span className="font-pixel text-xs text-pixel-orange tracking-wider">
          CHEFRIENDS
        </span>
      </div>
    )
  }

  // Full logo - hat + styled text + sparkle
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg
          width={(hatWidth + 2) * size}
          height={(hatHeight + 1) * size}
          viewBox={`0 0 ${(hatWidth + 2) * size} ${(hatHeight + 1) * size}`}
          className="image-pixelated"
          style={{ imageRendering: 'pixelated' }}
        >
          {renderPixelGrid(HAT_PIXELS, size, 1, 1)}
          {/* Sparkle */}
          {renderPixelGrid(SPARKLE_PIXELS, size, hatWidth - 1, 0)}
        </svg>
        {/* Subtle glow behind hat */}
        <div className="absolute inset-0 bg-pixel-orange/10 blur-lg -z-10" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-0">
          <span className="font-pixel text-sm text-pixel-orange tracking-wider glow-orange">
            CHEF
          </span>
          <span className="font-pixel text-sm text-text-bright tracking-wider">
            RIENDS
          </span>
        </div>
        <span className="text-[10px] text-text-dim tracking-widest mt-0.5 flex items-center gap-1">
          <span className="text-pixel-green font-pixel text-[6px]">&gt;</span>
          AI COOKING FRIENDS
        </span>
      </div>
    </div>
  )
}

export default PixelLogo
