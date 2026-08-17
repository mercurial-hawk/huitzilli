import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a div that fades/rises into view once it enters the
 * viewport, mirroring the vanilla-JS `.reveal` behavior from the original
 * static build. Respects prefers-reduced-motion and falls back gracefully
 * if IntersectionObserver isn't available.
 *
 * Usage: <Reveal as="div" className="hero__copy">...</Reveal>
 */
export default function Reveal({ as: Tag = 'div', className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [isIn, setIsIn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      setIsIn(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${isIn ? ' is-in' : ''}${className ? ' ' + className : ''}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}
