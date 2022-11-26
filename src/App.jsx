// @ts-check
import { Route } from 'wouter';
import Home from './screens/Home';
import LocalGame from './screens/LocalGame';
import OnlineGame from './screens/OnlineGame';
 

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
