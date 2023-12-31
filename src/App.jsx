import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from './components/NavBar/navBar';
import Home from './pages/Home';
import userData from './data/user';
import Skills from './pages/Skills';
import Error404 from './components/404/404';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 36rem;
`
export const LoginContext = createContext();

function App() {
    const [user, setUser] = useState(userData);

    return (
        <>
            <LoginContext.Provider value={[user, setUser]}>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </Container>
                <NavBar />
            </LoginContext.Provider>
        </>
    )
}

export default App;