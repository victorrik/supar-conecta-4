import useMediaQuery from "./useMediaQuery";

type ScreenTypeFunc = () => "xxl" | "xl" | "lg" | "md" | "sm";

const useScreenType:ScreenTypeFunc = () =>  {
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
	const xl = useMediaQuery("(min-width: 1280px)");
  const xxl = useMediaQuery("(min-width: 1536px)");
	
	if (xxl) { return 'xxl'; }
	if (xl) { return 'xl'; }
	if (lg) { return 'lg'; }
	if (md) { return 'md'; } 
	return 'sm';
};

export default useScreenType