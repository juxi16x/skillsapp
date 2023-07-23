import React from 'react';
import NavBar from './components/NavBar/navBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <NavBar/>
        </>
    )
}

export default App;