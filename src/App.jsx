import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route exact path="/" Component={LandingPage}></Route>
            <Route path="/dashboard" Component={DashboardPage}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
