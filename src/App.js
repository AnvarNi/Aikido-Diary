import React, { useState } from 'react';
import {Routes,Route} from 'react-router'
import PrivateRoute from './utils/PrivateRoute';
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import AttendancePage from "./pages/Attendance";
import PaymentPage from "./pages/Payment";
import KidsPage from './pages/Kids';
import ParentsPage from './pages/Parents';


function App() {
  return (
    <div className="App">  
      <Routes element={<PrivateRoute/>}>
          <Route>
            <Route path="/attendance" element={<AttendancePage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/kids" element={<KidsPage/>}/>
            <Route path="/parents" element={<ParentsPage/>}/>
          </Route>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes> 
    </div>
  );
}

export default App;
