//@ts-check
import { useRef, useState } from 'react'
import { Button, ScoreBoard, StopWatch, Tablero } from '../../components';
import { Link } from 'wouter';

const LocalGame= () =>{
	

	/**  @type {import('react').MutableRefObject<{resetBoard:()=>void} | null>}  */ 
	const tableroRef = useRef(null);
	/**  @type {import('react').MutableRefObject<{stop:()=>void,start:()=>void,reset:()=>void} | null>}  */ 
	const stopWatchRef = useRef(null);
	const [currentPlayer, setCurrentPlayer] = useState(0);
	const [gameStoped, setgameStoped] = useState(true);
	const [someoneWin, setsomeoneWin] = useState(false)

	/**
	 * 
	 * @param {any} datosMovimiento 
	 * @returns 
	 */
	const makeMove  =  (datosMovimiento ) => {
		const { x,y,itsWinner } = datosMovimiento;
		
		if (itsWinner) {
			setgameStoped(true);
			setsomeoneWin(true);
			stopWatchRef.current?.stop();
			let auxJugador  = `j${currentPlayer}`;
			
			//setHistorialVictorias({...historialVictorias,[auxJugador]:(historialVictorias[auxJugador] + 1) })
			return null
		}
		setCurrentPlayer(j=>j===1?2:1);
	}
	const startGane = () => { 
		setCurrentPlayer(1);
		setgameStoped(false)
		stopWatchRef.current?.start()
	}
	const resetGame = () => {
		tableroRef.current?.resetBoard();
		stopWatchRef.current?.reset();
		setCurrentPlayer(1);
		setgameStoped(false);
	} 
	return (
    <main className="flex flex-col justify-center items-center pt-10 pb-5 md:px-10 gap-4">
			<header className='flex flex-col md:flex-row md:items-center gap-4 md:gap-10' >
				<ScoreBoard 
					currentPlayer={currentPlayer} 
					player1={{
						name: "Jugador "
					}} player2={{
						name: "Jugador "
					}} />
				<StopWatch 
					ref={stopWatchRef}
					showMilli
				/>
			</header>
			<div className='flex justify-center items-start' >
				<Tablero
					ref={tableroRef}
					currentPlayer={currentPlayer}
					callbackMove={makeMove}
					gameStoped={gameStoped}
					/>
			</div>
			{gameStoped && 
			<div className='w-full flex justify-center items-center gap-4' >
				{someoneWin?
					<Button
						title='Volver a jugar'
						onClick={resetGame}
					/>:
					<Button
						title='Iniciar juego'
						onClick={startGane}
					/>
				}
				<Link href='/' >
					<Button
						type="secundary"
						title='Regresar'
						onClick={startGane}
					/>
				</Link>
		</div>

			}
		</main>
	)
}

export default LocalGame