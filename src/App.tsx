import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { ProjectPage } from './pages/ProjectsPage/ProjectsPage';

const App: React.FC = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
