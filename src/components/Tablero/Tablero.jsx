//@ts-check
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Ficha from './Ficha';

 
 
 /** @typedef {Array<Array<number>>} Tablero */
const tableroDefault = Array(6).fill(0).map(()=>Array(7).fill(0))
 
const Tablero = forwardRef((/**  @type {{currentPlayer:any,callbackMove:any}}  */props, ref)=> {
	const { currentPlayer, callbackMove } = props;
	const memoMovs = useRef({moveCount:0,lastYRow:Array(7).fill(5)})
	
	const [tablero, setTablero] = useState(tableroDefault);
	const [lastMove, setLastMove] = useState({x:-1,y:-1});
	useImperativeHandle(ref, () => ({
		makeMove:setOnTheBoard,
		resetBoard:resetTheBoard
  }));

	/**
	 * 
	 * @param {number} y 
	 * @param {number} x 
	 * @returns {number}
	 */
	const checoOcupado = (y,x) =>{
		if (y === -1) { return y }
		//Checamos si es el fondo del tablero
		if (y === 5 && !tablero[y][x]) { return 5; }
		//Checamos si esta ocupado entonces le restamos hacuendo que cheque el hueco de arriba
		if (tablero[y][x]) { return checoOcupado(y-1,x); }
		//Checamos si no esta ocupado y el de abajo si esta ocupado, entonces ya no puede bajar y ese ese el que puede usar
		//Esto es en caso de que elija el de hasta arriba o sea de arriba hacia abajo
		if (!tablero[y][x] && tablero[(y + 1)][x]) { return y}
		//Checamos si no esta ocupado y el de abajo esta disponible, entonces podemos bajar uno mas
		if (!tablero[y][x] && !tablero[(y + 1)][x]) { return checoOcupado(y+1,x); }
		return 0
	}
	/**
	 * Checa si logo hacer jugada en horizontal
	 * @param {number} y 
	 * @param {any} auxTablero 
	 * @returns {boolean}
	 */
	const checoHorizontal = (y,auxTablero) => { 
		let contador = 0;
		for (let i = 0; i < 7; i++) {
			if (contador === 4) { return true }
			if (auxTablero[y][i] === currentPlayer) {
				contador++
			}else{
				contador = 0;
			}
		} 
		return (contador === 4)
	}
	/**
	 * Checa si gano de manera vertical
	 * @param {number} x 
	 * @param {any} auxTablero 
	 * @returns {boolean}
	 */
	const checoVertical = (x,auxTablero) => {
		let contador = 0;
		for (let i = 0; i < 6; i++) { 
			if (contador === 4) { return true }
			if (auxTablero[i][x] === currentPlayer) {
				contador++
			}else{
				contador = 0;
			}
		} 
		return (contador === 4)
	}

	/**
	 * Checamos si gano de manera esquineada
	 * @param {number} x 
	 * @param {number} y 
	 * @param {any} auxTablero 
	 * @returns {boolean}
	 */
	const checoEsquineado = (x,y,auxTablero) => {
		let contador = 0, auxX = x, tabletoAux =[];
		tabletoAux.push(auxTablero[y][x])
		for (let auxY = (y+1); auxY < 6; auxY++) {
			auxX--
			if (!auxTablero[auxY][auxX]) { break }
			tabletoAux.unshift(auxTablero[auxY][auxX])
		}
		auxX = x;
		for (let auxY = (y-1); auxY > -1; auxY--) {
			auxX++
			if (auxTablero[auxY][auxX]) { break }
			tabletoAux.push(auxTablero[auxY][auxX])
		}
		if (tabletoAux.length < 4) { return false }
		for (let i = 0; i < tabletoAux.length; i++) {
			if (contador === 4) { return true }
			if (tabletoAux[i] === currentPlayer) { contador++ }
			else{ contador = 0; }
		}
		return (contador === 4)
	}
	/**
	 * Despues de checar en todos, si hay ganador	
	 * @param {number} y 
	 * @param {number} x 
	 * @param {Tablero} auxTablero 
	 * @returns {boolean}
	 */
	const checoSiHayGanador = (y,x,auxTablero) => {
		
		return checoHorizontal(y,auxTablero)|| checoVertical(x,auxTablero)||checoEsquineado(x,y,auxTablero)
	}

	/**
	 * Muestra "error" en caso de que ya este llena la fila	
	 * @param {number} x 
	 */
	const showError = (x) => { 
		for (let i = 0; i < 6; i++) {
			document.getElementById(`${i}-${x}`)?.classList.add("bg-french-rose-700")
		}
		setTimeout(() => {
			for (let i = 0; i < 6; i++) {
				document.getElementById(`${i}-${x}`)?.classList.remove("bg-french-rose-700")
			}
		}, 250);
	}
	/**
	 * Hacemos desvergue
	 * @param {number} indexY 
	 * @param {number} indexX 
	 * @returns 
	 */
	const handleMovimiento =  (indexY,indexX) => {
		let auxList = [...tablero];
		const indexYDisponible = memoMovs.current.lastYRow[indexX];
		
		if (indexYDisponible === -1) { 
			showError(indexX);
			callbackMove({x:indexX,y:indexYDisponible,error:-1,ganador:false});
			return null
		}
		--memoMovs.current.lastYRow[indexX]
		auxList[indexYDisponible][indexX] = currentPlayer;
		setLastMove(({x,y})=>{
			document.getElementById(`${y}-${x}`)?.classList.toggle('bg-blue-chill-400')
			document.getElementById(`${indexYDisponible}-${indexX}`)?.classList.toggle('bg-blue-chill-400')
			return {y:indexYDisponible,x:indexX}
		});
		setOnTheBoard(indexX,indexYDisponible);
		++memoMovs.current.moveCount
		
		if (memoMovs.current.moveCount > 6 && checoSiHayGanador(indexYDisponible,indexX,auxList)) {
			callbackMove({x:indexX,y:indexYDisponible,error:0,ganador:true})
			return
		} 
		callbackMove({x:indexX,y:indexYDisponible,error:0,ganador:false});
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
		setTablero(Array(6).fill(0).map(()=>Array(7).fill(0)))
	}

	/**
	 * 
	 * @param {boolean} showHide 
	 */
	const handleColumn = (showHide) => { 
		const column = document.getElementById("p-hover");
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
		<div className='grid grid-cols-7 relative bg-blue-chill-600 rounded-lg overflow-hidden' 
			onMouseEnter={()=>handleColumn(true)}
			onMouseLeave={()=>handleColumn(false)}
		>
			<div id={`p-hover`} 
				className='absolute h-full w-13 md:w-24 bg-blue-chill-500 transition-all opacity-0' 
			/>
				{tablero.map((arr,indexY)=>
					arr.map((subArr,indexX)=>
						<Ficha key={""+indexY+indexX}
							coords={{y:indexY,x:indexX}}
							player={subArr}
							onClick={()=>handleMovimiento(indexY,indexX)} 
						/>
					)
				)}
			</div>
		)
	}
)
 

export default Tablero