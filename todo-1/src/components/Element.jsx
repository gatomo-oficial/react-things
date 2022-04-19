import React from 'react';
import '../App.css';

// components
import { Button } from './Button';

export const Element = ({ content, onDelete }) => {
	return <div className="w-1/2 flex justify-between items-center pl-8 pr-4 py-3 bg-slate-200 border-2 border-slate-800 rounded-xl">
		<h1><i>Id. {content.id}</i> | {content.todo}</h1>
		<Button color="red" onClick={onDelete}>Eliminar</Button>
	</div>
};
