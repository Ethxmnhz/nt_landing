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
    let resizeObserver: ResizeObserver | null = null

    let shouldLoopBySegments =
      container.dataset.scrollLoop === 'segment' || container.dataset.scrollLoop === 'half'
    let repeatCount = 2
    let loopPoint = 0

    const recalculateLoopMetrics = () => {
      shouldLoopBySegments =
        container.dataset.scrollLoop === 'segment' || container.dataset.scrollLoop === 'half'

      const repeatCountRaw = Number(container.dataset.scrollRepeats)
      repeatCount = Number.isFinite(repeatCountRaw) ? Math.max(2, Math.floor(repeatCountRaw)) : 2

      if (shouldLoopBySegments) {
        loopPoint = container.scrollWidth / repeatCount
      } else {
        loopPoint = container.scrollWidth - container.clientWidth
      }
    }

    recalculateLoopMetrics()

    const startAutoScroll = () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)

      const tick = (timestamp: number) => {
        if (lastFrameTimeRef.current === null) {
          lastFrameTimeRef.current = timestamp
        }

        const elapsedSeconds = Math.min((timestamp - lastFrameTimeRef.current) / 1000, 0.05)
        lastFrameTimeRef.current = timestamp

        if (!(pauseOnHover && isHoveringRef.current)) {
          container.scrollLeft += speed * elapsedSeconds

          if (shouldLoopBySegments) {
            if (loopPoint > 0 && container.scrollLeft >= loopPoint) {
              container.scrollLeft -= loopPoint
            }
          } else if (container.scrollLeft >= loopPoint - 1) {
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

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        recalculateLoopMetrics()
      })
      resizeObserver.observe(container)
    }

    if (pauseOnHover) {
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      if (resizeObserver) resizeObserver.disconnect()
      if (pauseOnHover) {
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [elementId, speed, pauseOnHover, loop])

  return containerRef
}
