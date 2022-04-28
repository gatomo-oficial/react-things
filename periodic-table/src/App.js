// react
import { useState, useEffect } from 'react';

// css
import './App.css';

// card
import { Card } from './components/Card'

// wallpaper
import wallpaper from './assets/wallpaper.jpg'

const table = require('./assets/elements.json')

function App() {
    // elementos y busqueda

    const [filter, setFilter] = useState([]);
    const [elements, setElements] = useState([]);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        setElements(table);
        if(search.length === 0){
            setFilter(elements);
        } else {
            setFilter(elements.filter((e) => e.elemento.toLowerCase().includes(search)));
        }
        console.log('||| useEffect de 2 dependencias ejecutado')
    }, [search, elements]);

    const cards = filter.map(e => {
        return <Card key={e.numeroAtomico} id={e.numeroAtomico} element={e}/>
    })
    return(
        /* pantalla completa: w-full h-screen */
        <div
        style={{ backgroundImage: `url(${wallpaper})` }}
        className="flex flex-col justify-around items-center w-full h-screen bg-cover bg-bottom bg-no-repeat select-none"
        >
            <header className="flex flex-col space-y-8">
                <h1
                className="
                bg-gradient-to-r from-blue-500 to-emerald-500
                bg-clip-text text-transparent
                text-7xl font-bold px-8 py-6 rounded-lg
                hover:bg-clip-padding hover:text-white hover:shadow-lg
                ease-in-out duration-200
                mt-10
                ">Tabla Periódica</h1>
                <div className="flex justify-center items-center space-x-5">
                    <input
                    style={{
                        color: 'transparent',
                        textShadow: '0px 0px 0px rgb(30 41 59)'
                    }}
                    className="
                    px-8 py-6 w-full
                    outline-none rounded-lg
                    placeholder-transparent text-lg text-center capitalize
                    backdrop-filter backdrop-blur-md
					bg-white bg-opacity-60
                    focus:shadow-lg
                    ease-in-out duration-200
                    "
                    maxLength={2}
                    type="text"
                    spellCheck={false}
                    placeholder="Escribe un elemento (He, As, etc.)"
                    onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </header>
            
            <div
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}
            className="
            mt-5 flex flex-wrap items-stretch justify-center space-x-12 space-y-6 overflow-x-hidden
            ">
                {cards}
            </div>
        </div>
    )
}

export default App;
