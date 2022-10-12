import React from 'react';
import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function LikeMeTabContextProvider({ children}) {
	const [ltab, setlTab] = useState("회사소개");

	const value = {
		ltab,
		setlTab
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useLikeMeTabContext() {
	return useContext(Context);
} 