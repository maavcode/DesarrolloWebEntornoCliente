import { useState, useEffect } from 'react';

const POPULARES = ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Mewtwo', 'Lucario'];

export default function PokemonApp() {
  const [text, setText] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: 1. Validar si 'text' está vacío
    if (!text) return;
    
    const fetchPokemon = async () => {
      // TODO: 2. Implementar la llamada a la PokeAPI
      
        setLoading(true);

        try {
          // Guardo el resultado en una constante
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`);
          
          if (res.ok) { // Si sale bien se asigna los datos
            const data = await res.json();
            setPokemon(data)
          } else {      
            setPokemon(null)
          } 
        } catch (e) {
          console.error("Error al cargar los datos")
        } finally {
          setLoading(false)
        }
      
      
    };

    // TODO: 3. Configurar un temporizador (Debounce) de 500ms
    const timer = setTimeout(fetchPokemon, 500);

    // TODO: 4. Retornar una función de limpieza para cancelar el timer
    return () => clearTimeout(timer);

    // TODO: 6. Estudia y comenta la llamada a la API (función fetchPokemon)
    // HECHO
    
  }, [text]);

  return (
    <div className="p-8 max-w-md mx-auto bg-slate-100 rounded-xl shadow-lg font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">PokéBuscador</h1>
      
      {/* Selector de Pokémon Populares */}
      <select 
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 mb-4 border rounded bg-white"
      >
        <option value="">-- Elige un favorito --</option>
        {
          POPULARES.map( popular => {
            return <option key={popular} value={popular}>{popular}</option>
          })
        }
      </select>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="O escribe un nombre..."
      />

      {loading && <p className="text-blue-500 animate-pulse mt-2 text-center">Buscando...</p>}

      {/* Resultado de la búsqueda */}
      {pokemon && (
        <div className="mt-6 p-4 bg-white rounded-lg border-2 border-yellow-400">
          <h2 className="text-xl font-bold uppercase text-center">{pokemon.name}</h2>
          
          <div className="flex justify-center">
            <img src={pokemon.sprites.front_default} alt="Normal" className="w-24" />
            <img src={pokemon.sprites.front_shiny} alt="Shiny" className="w-24" />
          </div>

          <div className="mt-4">
            <div className="flex gap-2 justify-center mb-4">
              {pokemon.types.map(t => (
                <span key={t.type.name} className="px-3 py-1 bg-gray-200 rounded-full text-[10px] font-bold uppercase">
                  {t.type.name}
                </span>
              ))}
            </div>
            
            <div className="text-sm space-y-1 bg-slate-50 p-3 rounded">
              <p><strong>HP:</strong> {pokemon.stats[0].base_stat}</p>
              <p><strong>Ataque:</strong> {pokemon.stats[1].base_stat}</p>
              <p className="pt-2 border-t mt-2 italic text-slate-500">
                Habilidad: {pokemon.abilities[0].ability.name}
              </p>
            </div>
            
          </div>
          
        </div>
      )}
    </div>
  );
}