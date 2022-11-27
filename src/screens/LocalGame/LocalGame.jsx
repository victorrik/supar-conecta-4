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
		<main className='flex item-center justify-center bg-slate-400 w-screen h-screen' >
			<div className='p-5 md:p-10 w-full max-w-4xl bg-slate-800 flex flex-1' >
				<header>

				</header>
				<div className=' flex justify-center items-start flex-1' >
					<Tablero ref={tableroRef} currentPlayer={currentPlayer} callbackMove={makeMove} />
				</div>
			</div>
		</main>
	)
}

export default LocalGame