//@ts-check


/**
 * 
 * @param {{player:number,onClick:()=>void,coords:{x:number,y:number} }} FichaProps - Props de la ficha
 * @returns 
 */

const Ficha  = ({player,onClick,coords }) => {

	//@param {import("react").MouseEvent<HTMLDivElement>} evento
	/**
	 * 
	 * @param {any} evento
	 */
	const handleColumn = (evento) => {
		/**  @type {HTMLElement}  */ 
		const targetElement = evento.target
		const column = document.getElementById("back-column");
		if (column) {
			column.style.left = `${targetElement.offsetLeft}px`
		}
	}
	
	return(
		<div id={coords.y+'-'+coords.x}
			data-row={coords.y}
			data-col={coords.x}
			className="transition-all p-1 sm:p-2 z-[1] rounded-full"
			onMouseEnter={handleColumn}
			onMouseLeave={handleColumn}
			>
			<div onClick={onClick}
			className={`transition-all w-11 sm:w-20 h-11 sm:h-20 rounded-full cursor-pointer ${player === 1?"bg-french-rose-500":player ===2?"bg-golden-tainoi-300":"bg-blue-chill-700"} `} />
		</div>
	)

}


export default Ficha