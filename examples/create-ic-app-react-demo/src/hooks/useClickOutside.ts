import { RefObject, useEffect, useRef } from "react"

type AnyEvent = MouseEvent | TouchEvent

function useClickOutside<T extends HTMLDivElement = HTMLDivElement>(
  handler: (event: AnyEvent) => void,
): RefObject<T> {
  const ref = useRef<T>(null)
  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const el = ref?.current

      // Do nothing if clicking ref's element or descendent elements
      if (!el || el.contains(event.target as Node)) return

      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [ref, handler])
  return ref
}

export default useClickOutside
