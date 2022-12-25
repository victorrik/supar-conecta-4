//@ts-check
import { useRef, useState } from 'react'
import { Button, StopWatch, Tablero } from '../../components';

/** @type {number} */
const playerDefault = 1
 
const LocalGame= () =>{
	const tableroRef = useRef (null);
	// const stopWatchRef = useRef<any>(null); 
	const [historialVictorias, setHistorialVictorias] = useState({j1:0,j2:0});
	const [currentPlayer, setCurrentPlayer] = useState(playerDefault)
	const [hayGanador, setHayGanador] = useState(false);

	/**
	 * 
	 * @param {any} datosMovimiento 
	 * @returns 
	 */
	const makeMove  =  (datosMovimiento ) => {
		const { error, ganador } = datosMovimiento;
		if (error === -1) { return null; }
		if (ganador) {
			setHayGanador(true)
			//stopWatchRef.current?.stop();
			let auxJugador  = `j${currentPlayer}`;
			console.log('auxJugador',auxJugador)
			//setHistorialVictorias({...historialVictorias,[auxJugador]:(historialVictorias[auxJugador] + 1) })
			return null
		}
		setCurrentPlayer(j=>j===1?2:1);
	}
	
	// const resetGame = () => {
	// 	//tableroRef.current?.resetBoard();
	// 	//stopWatchRef.current?.reset();
	// 	setJugador(1);
	// 	setHayGanador(false);
	// }

	
	return (
    <main className="w-screen h-screen flex justify-center items-center p-0 md:p-10">
			<header></header>
			<div className=' flex justify-center items-start flex-1' >
				<Tablero ref={tableroRef} currentPlayer={currentPlayer} callbackMove={makeMove} />
			</div>
		</main>
	)
}

export default LocalGame