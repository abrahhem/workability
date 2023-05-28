import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './views/signIn';
import GameSignIn from "./views/game/gameSignIn";
import Test from "./views/game/main";
import DashboardPage from "./views/dashboard";


const theme = createTheme();

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="game" element={<GameSignIn />}/>
            <Route path="test" element={<Test />}/>
            <Route path="dashboard" element={<DashboardPage />}/>
            <Route path="*" element={<div>not found</div>}/>
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
