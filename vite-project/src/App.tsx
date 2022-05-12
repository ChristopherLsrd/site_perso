import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg'
import './App.css'

import Home from './Pages/Home';
import School from './Pages/School';
import Experiences from './Pages/Experiences';
import Projects from './Pages/Projects';
import Error from './Pages/Error';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Skills from './Pages/Skills';

const App = () => {

  return (


    <BrowserRouter>

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/school"} element={<School />} />
        <Route path={"/experiences"} element={<Experiences />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/skills"} element={<Skills />} />
        <Route path={"*"} element={<Error />} />

      </Routes>
    </BrowserRouter >




  );
};

export default App;
