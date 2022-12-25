import { useState, useEffect } from "react"
import useEventListener from "./useEventListener"
 
type MediaQueryFunc = (mediaQuery:string) => boolean;

const useMediaQuery:MediaQueryFunc = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState<boolean>(false)
  const [mediaQueryList, setMediaQueryList] = useState<any>(null)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
		//console.log(list)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])

  useEventListener("change", (e:any) => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}
export default useMediaQuery