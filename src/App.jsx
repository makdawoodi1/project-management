import React, { useEffect } from "react";
import Index from "./Components/Pages/IndexPage/Index";
import Login from "./Components/Pages/LoginPage/Login";
import Register from "./Components/Pages/RegisterPage/Register";
import Alert from "./Components/AlertSnackBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boards from "./Components/Pages/BoardsPage/Boards";
import { loadUser } from "./Services/userService";
import Store from "./Redux/Store";
// import ProtectedRoute from "./Utils/ProtectedRoute";
// import FreeRoute from "./Utils/FreeRoute";
import Board from "./Components/Pages/BoardPage/Board";
const App = () => {
  useEffect(() => {
    loadUser(Store.dispatch);
  }, []);
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        {/* Protected Routes */}
        <Route exact path="/boards" element={<Boards />} />
        <Route exact path="/board/:id" element={<Board />} />

        {/* Free Routes */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
