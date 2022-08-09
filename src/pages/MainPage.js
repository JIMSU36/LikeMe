import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import IconSub from '../components/IconSub';
import Menu1Content from '../components/Menu1Content';
import Menu2Content from '../components/Menu2Content';
import Slider from '../components/Slider';

const MainPage = () => {
    return(
        <div>
            <Header/>
            <Slider/>
            <IconSub/>
            <Menu1Content/>
            <Menu2Content/>
            <Contact/>
        </div>
    )
}

 export default MainPage;