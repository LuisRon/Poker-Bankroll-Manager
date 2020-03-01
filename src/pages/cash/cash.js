import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

const Cash = () => {
    const { sessions } = useContext(GlobalContext);
    //Crear tabla para meter los datos en cada HTMLTableRowElement
    //Cómo metemos las fechas?
    return (
        <React.Fragment>
            {sessions.map(session => <h4>Gain: {session.gain}€</h4>)}
        </React.Fragment>
    );
};

export default Cash;