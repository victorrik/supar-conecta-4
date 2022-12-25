import React from "react";
import { twMerge } from "tailwind-merge";
import ActivityIndicator from "../ActivityIndicator";


/**
 * TypesStyles {
	[key: string]: string;
}
 */

const typesStyles  = {
	primary: "bg-cyan-500 hover:bg-cyan-400",
	secundary: "bg-slate-700 hover:bg-slate-500",
	danger: "bg-red-500",
	disabled: "bg-gray-300",
	link: "bg-transparent text-cyan-400 underline",
};

/**
 * @typedef {"primary" | "secundary" | "danger" | "link"} TypesButton
 * @param {{
 * 	type?:TypesButton;
 * 	disabled?: boolean;
 * 	loading?: boolean;
 * 	title: string;
 * 	className?:string;
 * 	onClick?: React.MouseEventHandler<HTMLElement>;
 * }} ButtonProps - Propiedades del boton
 * @returns 
 */
const Button = ({
	type = "primary",
	onClick,
	className,
	loading,
	disabled,
	title,
}) => {
	const handleClick = (e) => {
		if (loading || disabled || !onClick) {
			return null;
		}
		onClick(e);
	};
	let currentStyle = typesStyles[type];
	if (disabled) {
		currentStyle = typesStyles.disabled;
	}

	return (
		<button
			type="button"
			className={twMerge("transition-colors font-semibold rounded-sm px-4 py-2 text-white flex items-center justify-center relative",currentStyle,className) }
			onClick={handleClick}
		>
			<span className={`transition-colors ${loading?"text-transparent":""}`} >
				{title}	
			</span>
			<ActivityIndicator className={`transition-opacity text-2xl absolute z-10 ${loading?"opacity-100":"opacity-0"}`} />
		</button>
	);
};

export default Button;
