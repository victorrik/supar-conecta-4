//@ts-check

/**
 * 
 * @param {{player:number,onClick:()=>void,coords:{x:number,y:number} }} FichaProps - Props de la ficha
 * @returns 
 */

const Ficha  = ({player,onClick,coords }) => {

	
	/**
	 * 
	 * @param {number} x 
	 */
	const handleColumn = (x) => {
		for (let i = 0; i < 6; i++) {
			document.getElementById(`${i}-${x}`)?.classList.toggle("bg-blue-chill-500")
		}
	}
	
	return(
		<div id={coords.y+'-'+coords.x}
			data-row={coords.y}
			data-col={coords.x}
			className="transition-all p-1 sm:px-2"
			onMouseEnter={()=>handleColumn(coords.x)}
			onMouseLeave={()=>handleColumn(coords.x)}
			>
			<div onClick={onClick}
			className={`transition-all w-11 sm:w-20 h-11 sm:h-20 rounded-full cursor-pointer ${player === 1?"bg-french-rose-500":player ===2?"bg-golden-tainoi-300":"bg-blue-chill-700"} `} />
		</div>
	)

}


export default Ficha