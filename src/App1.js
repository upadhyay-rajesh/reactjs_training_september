import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components1/header';
import HomeComponent from './pages/home';
import AddEmployeeComponent from './pages/addEmployee';
import EditEmployeeComponent from './pages/editEmployee';
import ViewEmployeeComponent from './pages/viewEmployee';
import FooterComponent from './components1/footer';

import React, { useState } from 'react';


function App1() {

  const[employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      salary: 50000,
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      salary: 2000,
      department: 'Electronics'
    },
    {
      id: 3,
      name: 'Lius',
      email: 'lius@example.com',
      salary: 7000,
      department: 'Construction'
    },
    {
      id: 4,
      name: 'Rajesh',
      email: 'rajesh@example.com',
      salary: 20000,
      department: 'Civil'
    }
  ]);

  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomeComponent employees={employees} />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<EditEmployeeComponent />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App1;
