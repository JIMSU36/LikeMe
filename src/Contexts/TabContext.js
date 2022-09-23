import React from 'react';
import { createContext, useContext, useState } from 'react';

const Context = createContext(); //createContext 선언

export function ApplicationContextProvider({ children}) {//관리대상들을 감쌀놈
	const [tab, setTab] = useState("강사양성과정"); //글로벌하게 관리할 state

	const value = {
		tab,
		setTab
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
    //children 자리에 감싸질 컴포넌트가 들어올 것
}
export function useApplicationContext() {//형제 컴포넌트에서 context 를 사용할때 쓸놈
	return useContext(Context);
} 