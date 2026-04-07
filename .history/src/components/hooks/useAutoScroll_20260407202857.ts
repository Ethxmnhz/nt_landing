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
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    const container = document.getElementById(elementId) as HTMLDivElement | null
    if (!container) return

    containerRef.current = container

    const startAutoScroll = () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current)

      scrollIntervalRef.current = setInterval(() => {
        if (isHoveringRef.current && pauseOnHover) return

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          if (loop) {
            container.scrollLeft = 0
          } else {
            clearInterval(scrollIntervalRef.current!)
          }
        } else {
          container.scrollLeft += speed / 16 // 60fps adjustment
        }
      }, 1000 / 60) // 60fps
    }

    // Hover handling
    const handleMouseEnter = () => {
      isHoveringRef.current = true
      if (pauseOnHover && scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current)
      }
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      startAutoScroll()
    }

    // Start scrolling
    startAutoScroll()

    // Add event listeners
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [elementId, speed, pauseOnHover, loop])

  return containerRef
}
