import React from 'react';
import GlobalStyle from '../globalStyles';
import  Header  from './Header/Header';
import Navbar from "./NavBar/Navbar";

class Home extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle/>
                <Navbar/>
                <Header/>
            </>
        );
    }
}

export default Home;