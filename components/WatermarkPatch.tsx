'use client'

/**
 * WatermarkPatch — covers a baked-in AI watermark on a photo with a gradient
 * that blends into the surrounding image tone.
 *
 * Usage:
 *   <div style={{ position: 'relative' }}>
 *     <img src="..." />
 *     <WatermarkPatch corner="bottom-right" width={72} height={72} color="rgba(15,13,12,0.95)" />
 *   </div>
 *
 * Props:
 *   corner   — which corner the watermark is in
 *   width    — patch width in px (default 72)
 *   height   — patch height in px (default 72)
 *   color    — the opaque anchor color for the gradient (match darkest nearby tone)
 *   style    — optional extra inline styles for fine-tuning
 */

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

interface WatermarkPatchProps {
  corner?: Corner
  width?: number
  height?: number
  color?: string
  style?: React.CSSProperties
}

const GRADIENT_DIRECTION: Record<Corner, string> = {
  'top-left':     'to bottom right',
  'top-right':    'to bottom left',
  'bottom-left':  'to top right',
  'bottom-right': 'to top left',
}

const CORNER_POSITION: Record<Corner, React.CSSProperties> = {
  'top-left':     { top: 0,    left: 0  },
  'top-right':    { top: 0,    right: 0 },
  'bottom-left':  { bottom: 0, left: 0  },
  'bottom-right': { bottom: 0, right: 0 },
}

export default function WatermarkPatch({
  corner  = 'bottom-right',
  width   = 72,
  height  = 72,
  color   = 'rgba(15,13,12,0.95)',
  style,
}: WatermarkPatchProps) {
  const dir = GRADIENT_DIRECTION[corner]
  const pos = CORNER_POSITION[corner]

  return (
    <div
      aria-hidden="true"
      style={{
        position:   'absolute',
        pointerEvents: 'none',
        zIndex:     9,
        width:      `${width}px`,
        height:     `${height}px`,
        background: `linear-gradient(${dir}, ${color} 0%, transparent 100%)`,
        ...pos,
        ...style,
      }}
    />
  )
}
