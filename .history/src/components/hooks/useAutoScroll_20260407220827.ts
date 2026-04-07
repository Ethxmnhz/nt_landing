import { useEffect, useRef } from 'react'

interface UseAutoScrollOptions {
  speed?: number // pixels per second
  pauseOnHover?: boolean
  loop?: boolean
}

export function useAutoScroll(
  elementId: string,
  options: UseAutoScrollOptions = {}
) {
  const { speed = 50, pauseOnHover = true, loop = true } = options
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number | null>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const container = document.getElementById(elementId) as HTMLDivElement | null
    if (!container) return

    containerRef.current = container

    const startAutoScroll = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)

      const tick = (timestamp: number) => {
        if (lastFrameTimeRef.current === null) {
          lastFrameTimeRef.current = timestamp
        }

        const elapsedSeconds = (timestamp - lastFrameTimeRef.current) / 1000
        lastFrameTimeRef.current = timestamp

        if (!(pauseOnHover && isHoveringRef.current)) {
          container.scrollLeft += speed * elapsedSeconds

          const shouldLoopBySegments =
            container.dataset.scrollLoop === 'segment' || container.dataset.scrollLoop === 'half'

          if (shouldLoopBySegments) {
            const repeatCountRaw = Number(container.dataset.scrollRepeats)
            const repeatCount = Number.isFinite(repeatCountRaw)
              ? Math.max(2, Math.floor(repeatCountRaw))
              : container.dataset.scrollLoop === 'half'
                ? 2
                : 2
            const loopPoint = container.scrollWidth / repeatCount
            if (container.scrollLeft >= loopPoint) {
              container.scrollLeft -= loopPoint
            }
          } else if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
            if (loop) {
              container.scrollLeft = 0
            } else {
              return
            }
          }
        }

        animationFrameRef.current = requestAnimationFrame(tick)
      }

      animationFrameRef.current = requestAnimationFrame(tick)
    }

    // Hover handling
    const handleMouseEnter = () => {
      isHoveringRef.current = true
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      lastFrameTimeRef.current = null
    }

    // Start scrolling
    startAutoScroll()

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementId, speed, pauseOnHover, loop])

  return containerRef
}
