import { useEffect, useRef } from "react"
type EventListenerFunc = (
  eventType:string,
  callback:any,
  element:any
) => any;

const useEventListener: EventListenerFunc = (eventType, callback, element = window ) =>{
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = (e:any) => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])
}
export default useEventListener