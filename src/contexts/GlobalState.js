import { createContext } from 'react';

const initialState = {
    sessions: [
        {
            type: "cash",
            date: "19.02.2020",
            buyIn: 0.25,
            gain: 1
        },
        {
            type: "tournament",
            date: "19.02.2020",
            buyIn: 0.25,
            gain: 0
        }
    ]
};

export const GlobalContext = createContext(initialState);

