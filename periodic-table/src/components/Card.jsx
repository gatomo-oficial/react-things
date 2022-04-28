function getGroup(group, period){
    // gases nobles
    if(group === 18){
        return 'Gases nobles';
    }
    
    // halogenos
    if(group === 17){
        return 'Halógenos';
    }

    // no metales
    if(
        // hidrogeno
        (group && period === 1) ||
        // CNO
        ((group >= 14 && group <= 16) && period === 2) ||
        // PS
        ((group === 15 || group === 16) && period === 3) ||
        // selenio
        (group === 16 && period === 4)
    ) {
        return 'No metales';
    }

    // semimetales
    if(
        // boro
        (group === 13 && period === 2) ||
        (group === 14 && (period === 3 || period === 4)) ||
        (group === 15 && (period === 4 || period === 5)) ||
        (group === 16 && (period === 5 || period === 6))
    ) {
        return 'Semimetales';
    }

    // metales
    if(
        (group === 13 && period >= 3) ||
        (group === 14 && period >= 5) ||
        (group === 15 && period >= 6) ||
        (group === 16 && period >= 7)
    ) {
        return 'Metales';
    }

    // metales de transición
    if(
        (group >= 3 && period >= 4) &&
        group <= 12
    ) {
        return 'Metales de transición';
    }

    // alcalinoterreos
    if(group === 2){
        return 'Alcalinotérreos';
    }

    // alcalinos
    if(group === 1){
        return 'Alcalinos';
    }

    // lantánidos
    if(group === '-' && period === 6){
        return 'Lantánidos';
    }

    // actínidos
    if(group === '-' && period === 7){
        return 'Actínidos';
    }
}

function getGradient(type){
    switch(type){
        case 'Gases nobles':
            return 'from-lime-300 to-teal-600';
        case 'Halógenos':
            return 'from-teal-900 to-green-600';
        case 'No metales':
            return 'from-yellow-600 to-orange-300';
        case 'Semimetales':
            return 'from-rose-400 to-red-700';
        case 'Metales':
            return 'from-indigo-400 to-purple-800';
        case 'Metales de transición':
            return 'from-cyan-300 to-blue-700';
        case 'Alcalinotérreos':
            return 'from-orange-200 to-yellow-400';
        case 'Alcalinos':
            return 'from-gray-600 to-slate-900';
        case 'Lantánidos':
            return 'from-lime-200 to-emerald-600';
        case 'Actínidos':
            return 'from-blue-900 to-teal-700';
        default:
            return '';
    }
}

export const Card = ({ element }) => {
    const colorG = getGradient(getGroup(element.grupo, element.periodo));
	return (
		<div
			className="flex w-max h-max
        backdrop-filter backdrop-blur-md
		bg-white bg-opacity-60
        rounded-lg 
        py-6 px-8
        ">
			
            <div className="flex justify-center items-start mr-4 float-left">
                <div
                className={`
                mt-20 p-1 bg-gradient-to-tr ${colorG} rounded-xl
                `}>
                    <div style={{ justifyContent: 'center' }} className="bg-white rounded-lg flex flex-col h-full w-max px-8 py-6 justify-center justify-items-center">
                        <div className="flex justify-around">
                            <p className={`
                            bg-gradient-to-tl ${colorG}
                            bg-clip-text text-transparent font-bold
                            `}>{element.numeroAtomico}</p>
                            <p className={`
                            bg-gradient-to-tl ${colorG}
                            bg-clip-text text-transparent font-bold
                            `}>{element.masa}</p>
                        </div>
                        <h1
                        className={`
                        bg-gradient-to-tl ${colorG}
                        bg-clip-text text-transparent font-extrabold text-6xl
                        `}>
                            {element.elemento}
                        </h1>
                        <div className="justify-center">
                            <p className={`
                            bg-gradient-to-tl ${colorG}
                            bg-clip-text text-transparent font-bold
                            `}>{element.nombre}</p>
                            <p className={`
                            bg-gradient-to-tl ${colorG}
                            bg-clip-text text-transparent font-bold
                            `}>{element.configElectronica}</p>
                        </div>
                    </div>
                </div>
            </div>
			<div className="flex flex-col justify-around items-start space-y-4">
				<div>
					<b>Nombre: </b>
					{element.nombre}
				</div>
				<div>
					<b>Masa: </b>
					{element.masa}
				</div>
				<div>
					<b>Densidad: </b>
					{element.densidad} Kg/m³
				</div>
				<div>
					<b>Estructura: </b>
					{element.estructura}
				</div>
				<div>
					<b>Grupo: </b>
					{getGroup(element.grupo, element.periodo)} (grupo {element.grupo}, periodo {element.periodo})
				</div>
				<div>
					<b>Configuración electrónica: </b>
					{element.configElectronica}
				</div>
				<div>
					<b>Descubrimiento: </b>
					{element.descubrimiento === 'Prehistoria'
						? 'Antiguo'
						: element.descubrimiento}
				</div>
			</div>
		</div>
	);
};
