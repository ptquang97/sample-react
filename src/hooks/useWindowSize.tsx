import debounce from "lodash.debounce"
import { useEffect, useState } from "react"

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

const useWindowSize = (delay = 0) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }
    const debouncedHandleResize = debounce(handleResize, delay)

    window.addEventListener("resize", debouncedHandleResize)
    return () => window.removeEventListener("resize", debouncedHandleResize)
  }, [delay])

  return windowDimensions
}

export default useWindowSize
