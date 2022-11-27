//@ts-check
 
import { Link } from 'wouter';
import { Button, Icons, Tooltip } from '../components';
 
 

function Home() { 
	
	return (
		<main className='w-screen h-screen flex justify-center items-center p-10' >
			<div className='shadow-lg p-5 rounded-md bg-slate-200' >
				<h1 className='text-2xl font-semibold text-center' >Conecta 4</h1>
				<p className='text-lg text-center' >
					Selecciona el modo que deseas jugar
				</p>
				<div className='grid grid-cols-2 gap-4 mt-5' >
						<Tooltip
								title='Juego por turnos en tu equipo'
								placement='top'
							>

							<Link className='shadow-md shadow-tarawera-600 rounded-lg py-5 flex items-center justify-center flex-col'  to='local' >
								<h2>Local </h2>
								<div className='row-icon' >
									<Icons name='people' />
								</div>
							</Link>
							</Tooltip>

							<Tooltip
								title='Proximamente'
								placement='top'
							> 
							<div className='shadow-md shadow-tarawera-600 rounded-lg py-5 flex items-center justify-center flex-col'   >
								<h2>En linea</h2>
								<div className='row-icon' >
									<Icons name='person-workspace' />
									<Icons name='hdd-network' />
									<Icons name='person-workspace' />
								</div>
							</div> 
							</Tooltip>
						 
					</div>
			</div>
		</main>
	)
}

export default Home