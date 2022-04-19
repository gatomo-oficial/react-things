import React from 'react';

export const Button = ({ color, onClick, children }) => {
	if (color === 'blue') {
		return(
			<button
				className="px-8 py-3 rounded-lg font-bold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 ease-in-out duration-200"
				onClick={onClick}
			>
				{children}
			</button>
		)
	} else if (color === 'red') {
		return(
			<button
				className="px-8 py-3 rounded-lg font-bold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 ease-in-out duration-200"
				onClick={onClick}
			>
				{children}
			</button>
		)
	}
};
