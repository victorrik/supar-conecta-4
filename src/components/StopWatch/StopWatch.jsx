//@ts-check
import { useEffect } from "react";
import { useRef } from "react";
import {
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

/**
 *
 *
 * @typedef  {{
 * autoStart?: boolean,
 * showMilli?: boolean
 * }} StopWatchProps
 */
const StopWatch = forwardRef(
  (
    /**  @type {StopWatchProps}  */ { autoStart, showMilli },
    ref
  ) => {
    /**  @type {import('react').MutableRefObject<NodeJS.Timer|null>}  */
    const interval = useRef(null);
    const [time, setTime] = useState(0);
    useEffect(() => {
      if (autoStart) {
        start();
      }
    }, []);

    useImperativeHandle(ref, () => ({
      start,
      stop,
      reset,
    }));

    const start = () => {
      interval.current = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    };
    const stop = () => {
      clearTimer();
    };
    const clearTimer = () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
    const reset = () => {
      clearTimer();
      setTime(0);
      start();
    };
    const getTime = () => {
      return time;
    };
    return (
      <div className="text-center font-mono text-3xl text-white">
        <span>
					{("0" + Math.floor((time / 60000) % 60)).slice(-2)}: 
					{("0" + Math.floor((time / 1000) % 60)).slice(-2)}
					{showMilli && (
						<>:
							<i className="text-2xl" >{("0" + ((time / 10) % 100)).slice(-2)}</i>{" "}
						</>
					)}
				</span>
      </div>
    );
  }
);

export default StopWatch;
