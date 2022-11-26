//@ts-check
 
import { Link } from 'wouter';
import { Button, Icons } from '../components';
 
 

function Home() { 

	 
	return (
		<div className='screen-conecta-4' >
			<h1>Conecta 4</h1>
			<div className='box' >
					<div className='row-btn-inicio' >
						<Link to='local' title='meow'  >
							<h2>Local </h2>
							<div className='row-icon' >
								<Icons name='people' />
							</div>
						</Link>
						<Link to='online' >
							<h2>En linea</h2>
							<div className='row-icon' >
								<Icons name='person-workspace' />
								<Icons name='hdd-network' />
								<Icons name='person-workspace' />
							</div>
						</Link> 
					</div>
				</div>
		</div>
	)
}

export default Home