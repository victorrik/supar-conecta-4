//@ts-check
import { twMerge } from "tailwind-merge";

 
/** @type {number} duracion  */
const duracion = 1;
/** @type {string} first */
const first = `${0}s`;
/** @type {string} second */
const second = `${(duracion / 4)}s`;
/** @type {string} third */
const third = `${duracion / 2}s`;


/**
 * 
 * @param {{className?:string}} ActivityIndicatorProps 
 * @returns {JSX.Element}
 */
const ActivityIndicator = ({ className } ) => (
	<span className={twMerge("inline-block",className)} >
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width={`${1 * 0.8}em`} height={`${1}em`} viewBox="0 0 24 30" >
			<rect x="0" y="10" width="5" height="5" fill="currentColor" opacity="0.2">
				<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin={first} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin={first} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin={first} dur={`${duracion}s`} repeatCount="indefinite" />
			</rect>
			<rect x="9.5" y="10" width="5" height="5" fill="currentColor" opacity="0.2">
				<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin={second} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin={second} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin={second} dur={`${duracion}s`} repeatCount="indefinite" />
			</rect>
			<rect x="19" y="10" width="5" height="5" fill="currentColor" opacity="0.2">
				<animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin={third} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="height" attributeType="XML" values="10; 20; 10" begin={third} dur={`${duracion}s`} repeatCount="indefinite" />
				<animate attributeName="y" attributeType="XML" values="10; 5; 10" begin={third} dur={`${duracion}s`} repeatCount="indefinite" />
			</rect>
		</svg>
	</span>
);


export default ActivityIndicator