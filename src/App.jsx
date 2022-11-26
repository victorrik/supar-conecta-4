import { useState } from 'react'
import { Route } from 'wouter'
import Game from './screens/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Route path="/" component={Game} />
  )
}

export default App
