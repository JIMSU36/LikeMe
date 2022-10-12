import React,{createContext, useContext, useState} from 'react';

export const ResultContext = createContext(undefined); 

export function ResultContextProvider({ children }) {
	const [scrollNum, setScrollNum] = useState(1); 

	const value = {
		scrollNum,
		setScrollNum,
	};

	return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
}

export function useResultContext() {
	return useContext(ResultContext);
}