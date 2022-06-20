// Archivos
import Header from "./components/Header/Header";
import Active from "./components/Active/Active";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Archived from "./components/Archived/Archived";

// Hooks

// Librerias
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/active" element={<Active />} />
                    <Route path="/archived" element={<Archived />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

