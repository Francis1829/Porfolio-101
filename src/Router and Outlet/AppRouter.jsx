import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeF from '../Pages/HomeF';
import AboutMeF from '../Pages/AboutMeF';
import ProjectsF from '../Pages/ProjectsF';
import EducationF from '../Pages/EducationF';

function AppRouter() {
  return (
    <>
    <Routes>
         <Route path="/" exact Component={HomeF } />
          <Route path="/AboutMe" Component={AboutMeF } />
          <Route path="/Projects" Component={ProjectsF} />
          <Route path="/Education" Component={EducationF } />
        </Routes>
    </>
  )
}

export default AppRouter