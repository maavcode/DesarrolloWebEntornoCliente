import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonList from './PokemonList'


function App() {

  const [pokemon, setPokemon] = useState(["bulbasur", "charmander"])

  return (
    <>
      <PokemonList pokemon={pokemon}/>
    </>
  )
}

export default App
