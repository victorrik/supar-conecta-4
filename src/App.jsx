// @ts-check
import { Route } from 'wouter';
import Home from './screens/Home';
import LocalGame from './screens/LocalGame';
import OnlineGame from './screens/OnlineGame';

// const App = () => {
// 	return(
// 		<main className="w-screen h-screen flex justify-center items-center p-5 md:p-10">
// 		<div className="shadow-2xl p-5 w-full max-w-lg md:p-8 rounded-md bg-blue-chill-700 text-white">
// 			<h1 className='text-3xl font-bold text-center' >Juego de conecta 4 proximamente</h1>
// 		</div>
// 	</main>
// 	)
// }
function App() { 
  return (
    <>
			<Route path="/" component={Home} />
			<Route path="/online" component={OnlineGame} />
			<Route path="/local" component={LocalGame} />
		</>
  )
}

export default App
