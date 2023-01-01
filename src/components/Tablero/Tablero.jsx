//@ts-check
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Ficha from './Ficha';
import { checkWinner } from './checkMovs';
import { twMerge } from 'tailwind-merge';


/** @typedef {Array<Array<number>>} Tablero */
const tableroDefault = Array(6).fill(0).map(()=>Array(7).fill(0))
/** 
 * @typedef {{
 * currentPlayer:any,
 * callbackMove:any,
 * gameStoped:boolean
 * }} BoardProps 
 * 
*/

const Tablero = forwardRef((/**  @type {BoardProps}  */props, ref)=> {
	const { currentPlayer, callbackMove, gameStoped } = props;
	const memoMovs = useRef({moveCount:0,lastYRow:Array(7).fill(5)})
	/**  @type {import('react').MutableRefObject<HTMLElement|null>}  */
	const elementLastMovRef = useRef(null);
	const [tablero, setTablero] = useState(tableroDefault);
	
	
	useImperativeHandle(ref, () => ({
		makeMove:setOnTheBoard,
		resetBoard:resetTheBoard
  }));
 
	/**
	 * Hacemos desvergue
	 * @param {number} x 
	 * @returns 
	 */
	const handleMovimiento =  (x) => {
		if (gameStoped) { return }
		let auxList = [...tablero];
		const y = memoMovs.current.lastYRow[x];
		let itsWinner = false;
		if (y === -1) { return  }
		++memoMovs.current.moveCount

		auxList[y][x] = currentPlayer;

		if (memoMovs.current.moveCount > 6) {
			itsWinner = checkWinner(auxList,x,y);
		}
		setOnTheBoard(x,y);
		--memoMovs.current.lastYRow[x]
		setLastMove(x,y)
		callbackMove({x,y,itsWinner});
	}

	/**
	 * 
	 * @param {number} x 
	 * @param {number} y 
	 */
	const setLastMove = (x,y) => { 
		
		elementLastMovRef.current?.classList.toggle('bg-blue-chill-400')
		document.getElementById(`${y}-${x}`)?.classList.toggle('bg-blue-chill-400')
		elementLastMovRef.current = document.getElementById(`${y}-${x}`);
	}
	/**
	 * Se se pone la ficha en el tablero
	 * @param {number} x 
	 * @param {number} y 
	 */
	const setOnTheBoard = (x,y) => { 
		let auxList = [...tablero];
		auxList[y][x] = currentPlayer;
		setTablero(auxList);
	}
	const resetTheBoard = () => { 
		memoMovs.current.moveCount = 0;
		memoMovs.current.lastYRow = Array(7).fill(5);
		elementLastMovRef.current?.classList.toggle('bg-blue-chill-400')
		elementLastMovRef.current = null
		setTablero(Array(6).fill(0).map(()=>Array(7).fill(0)))
	}

	/**
	 * 
	 * @param {boolean} showHide 
	 */
	const handleColumn = (showHide) => { 
		const column = document.getElementById("back-column");
		if (column) {
			if (showHide) {
				setTimeout(() => {
					column.style.opacity = "1"
				}, 100);
			}else{
				column.style.opacity = "0"
			}
		}
		// for (let i = 0; i < 6; i++) {
		// 	document.getElementById(`${i}-${x}`)?.classList.toggle("bg-blue-chill-500")
		// }
	}
	return (
		<div className={`transition-all duration-500 grid grid-cols-7 relative rounded-lg overflow-hidden ${gameStoped?"bg-blue-chill-500":"bg-blue-chill-600"}`}
			onMouseEnter={()=>handleColumn(true)}
			onMouseLeave={()=>handleColumn(false)}
		>
			<div id={`back-column`} 
				className='absolute h-full w-13 md:w-24 bg-blue-chill-500 transition-all opacity-0 left-0' 
			/>
				{tablero.map((arr,y)=>
					arr.map((subArr,x)=>
						<Ficha key={""+y+x}
							coords={{ y, x }}
							player={subArr}
							onClick={()=>handleMovimiento(x)} 
						/>
					)
				)}
			</div>
		)
	}
)
 

export default Tablero