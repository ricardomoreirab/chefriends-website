const COLORS: Record<string, string> = {
  '.': 'transparent',
  'W': '#FFFFFF',
  'w': '#E0E0E0',
  'S': '#FFCC99',
  'D': '#C68642',
  'b': '#1a1a2e',
  'B': '#2D2D3F',
  'R': '#ef4444',
  'G': '#22c55e',
  'g': '#16a34a',
  'O': '#FF6B35',
  'Y': '#FFD23F',
  'U': '#3b82f6',
  'P': '#a855f7',
  'T': '#14b8a6',
  'N': '#92400e',
  'm': '#7c5c3f',
}

type ChefId = 'pepe' | 'yuki' | 'carmen' | 'priya' | 'jacques' | 'somchai'

const CHEF_PIXELS: Record<ChefId, string[]> = {
  pepe: [
    '..WWWW..',
    '.WWWWWW.',
    '..SSSS..',
    '.SbSSbS.',
    '..SSSS..',
    '..mSSm..',
    '..GWWR..',
    '.GGWWRR.',
    '..S..S..',
    '..B..B..',
  ],
  yuki: [
    '.WWWWWW.',
    '..RRRR..',
    '..SSSS..',
    '.SbSSbS.',
    '..SSSS..',
    '...SS...',
    '..WWWW..',
    '.WWRWWW.',
    '..S..S..',
    '..B..B..',
  ],
  carmen: [
    'YYYYYYYY',
    '..YYYY..',
    '..DDDD..',
    '.DbDDbD.',
    '..DDDD..',
    '...DD...',
    '..RGRG..',
    '.RRGGRR.',
    '..D..D..',
    '..N..N..',
  ],
  priya: [
    '..OOOO..',
    '.OOOOOO.',
    '.ODDDDO.',
    '.DbDDbD.',
    '..DDDD..',
    '...DD...',
    '..PYPY..',
    '.PPYYPP.',
    '..D..D..',
    '..N..N..',
  ],
  jacques: [
    '...WW...',
    '..WWWW..',
    '..WWWW..',
    '..SSSS..',
    '.SbSSbS.',
    '..SmmS..',
    '..UWUW..',
    '.UUWWUU.',
    '..S..S..',
    '..B..B..',
  ],
  somchai: [
    '...YY...',
    '..YYYY..',
    '.YYYYYY.',
    '..DDDD..',
    '.DbDDbD.',
    '..DDDD..',
    '..TGTG..',
    '.TTGGTT.',
    '..D..D..',
    '..B..B..',
  ],
}

interface PixelChefProps {
  chef: ChefId
  size?: number
  className?: string
}

const PixelChef = ({ chef, size = 8, className = '' }: PixelChefProps) => {
  const pixels = CHEF_PIXELS[chef]
  const width = pixels[0].length
  const height = pixels.length

  return (
    <svg
      width={width * size}
      height={height * size}
      viewBox={`0 0 ${width * size} ${height * size}`}
      className={`image-pixelated ${className}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {pixels.map((row, y) =>
        row.split('').map((pixel, x) => {
          const color = COLORS[pixel]
          if (!color || color === 'transparent') return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x * size}
              y={y * size}
              width={size}
              height={size}
              fill={color}
            />
          )
        })
      )}
    </svg>
  )
}

export { CHEF_PIXELS, type ChefId }
export default PixelChef
