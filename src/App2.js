import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components1/header';
import HomeComponent from './pages/home';
import AddEmployeeComponent from './pages/addEmployee';
import EditEmployeeComponent from './pages/editEmployee';
import ViewEmployeeComponent from './pages/viewEmployee';
import FooterComponent from './components1/footer';
import EmployeeServiceFetchApi from './service/employeefetchapi';
import { useEffect } from 'react';

import React, { useState } from 'react';


function App1() {

  const[employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeServiceFetchApi.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  function addEmployee(employee) {
    //setEmployees([...employees, employee]);
    EmployeeService.addEmployee(employee).then((res) => {
      setEmployees([...employees, res.data]);
    });
  }

  function editEmployee(updatedEmployee) {
    EmployeeService.updateEmployee(updatedEmployee.id,updatedEmployee).then((res) => {
      setEmployees(employees.map((employee) => employee.id === updatedEmployee.id ? updatedEmployee : employee));
    });
  }
  function deleteEmployee(id) {
    const result = window.confirm("Are you sure you want to delete this employee?");
    if (result) {
     setEmployees(employees.filter((employee) => employee.id !== id));
    }
    
  }
  

  return (
    <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomeComponent employees={employees} deleteEmployee={deleteEmployee} />} />
        <Route path="/add-employee" element={<AddEmployeeComponent addEmployee={addEmployee} />} />
        <Route path="/edit-employee/:id" element={<EditEmployeeComponent employees={employees} editEmployee={editEmployee} />} />
        <Route path="/view-employee/:id" element={<ViewEmployeeComponent employees={employees} />} />
       
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App1;
