import { useState, useEffect } from 'react';
import './App.css';

// components
import { Element } from './components/Element';
import { Button } from './components/Button';

function App() {
	const [todo, setTodo] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [countID, setCountID] = useState(0);
	
	// submit todo
	const submitTodo = (e) => {
		e.preventDefault();

		setTodo([
			...todo,
			{
				id: countID,
				todo: newTodo,
			}
		]);
		setNewTodo('');
		// esto es para hacer un ID sin usar el index, ya que no sirve para los keys de react
		setCountID(countID + 1);
		console.log('crear todo')
	}

	const deleteTodo = (key) => {
		// aqui entran todos los elementos que no coincidan con el KEY
		const newTodos = todo.filter(todo => todo.id !== key);
		setTodo(newTodos);
		console.log('eliminar todo')
	}

	const todoListItems = todo.map(e => {
		return <Element key={e.id} content={e} onDelete={() => deleteTodo(e.id)} />
		// para añadir parametros a una funcion, hay que ponerlo dentro de un arrow function, si no, no va
		/*return (

			<div key={e.id} className="w-1/2 flex justify-between items-center pl-8 pr-4 py-3 bg-slate-200 border-2 border-slate-800 rounded-xl">
				<h1><i>Id. {e.id}</i> | {e.todo}</h1>
				<Button color="red" onClick={() => deleteTodo(e.id)}>Eliminar</Button>
			</div>
		)*/
	})

	
	// items-, alinear el eje Y (vertical)
	// justify-, alinear el eje X (horizontal)
	return (
		<div className="w-full h-screen flex flex-col justify-start pt-20 items-center space-y-10 bg-slate-50">
			<h1 className="text-6xl font-bold text-slate-900">To-Do App</h1>
			<div className="flex justify-center items-center space-x-4">
				<input value={newTodo} onChange={e => setNewTodo(e.target.value)} className="bg-slate-400 rounded-md placeholder-slate-900 px-8 py-3" type="text" placeholder="Crea una tarea..." />
				<Button onClick={submitTodo} color="blue">Crear</Button>
			</div>
			{todoListItems}
		<br />
			
		</div>
	);
}

/*
const [theTodo, setTheTodo] = useState([]);
	const [theNewTodo, setTheNewTodo] = useState('');
	const [theCount, setTheCount] = useState(0);

	const theList = theTodo.map(e => {
		return <div key={e.key}>id. {e.key} | {e.todo}</div>
	})


<input type="text" onChange={e => setTheNewTodo(e.target.value)} />
			<button onClick={() => { 
				setTheTodo(old => [...old, { todo: theNewTodo, key: theCount}]);
				setTheCount(theCount + 1);
			}}>añadir</button>
			<div>
				{theList}
			</div>
*/

export default App;
