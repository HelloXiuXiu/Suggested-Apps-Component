import { useEffect } from 'react'

export function useAnimateWithDelay({ parentElement, animClass, delay, enabled }) {
  useEffect(() => {
    if (!enabled) return

    let activeElem = 0
    const childElems = Array.from(parentElement.current.children)

    function addItem() {
      childElems.forEach(el => el.classList.remove(animClass))
      childElems[activeElem].classList.add(animClass)

      if (activeElem < childElems.length - 1) {
        activeElem++
      } else {
        activeElem = 0
      }
    }

    const interval = setInterval(addItem, delay)
    addItem()

    return () => clearInterval(interval)
  },[enabled])
}
