import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from "./pages/cart_page/CartPage";
import DetailProduct from "./pages/Detail_Product/Detail_Product";
import Transaction_Page from "./pages/transaction/Transaction_Page";


export default function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route exact path="/home" Component={LandingPage}></Route>
            <Route path="/dashboard" Component={DashboardPage}></Route>
            <Route path="/dashboard" element={DashboardPage} />
            <Route path="/cart" Component={CartPage}></Route>
            <Route path="/detailProduct" Component={DetailProduct}></Route>
            <Route path="/transactionPage" Component={Transaction_Page}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}
