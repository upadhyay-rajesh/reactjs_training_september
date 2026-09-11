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


function App2() {

  const[employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeServiceFetchApi.getEmployees().then((res) => {
      console.log("Response from server:", res);
      if(!res){
        throw new Error("No response from server");
      }
      setEmployees(res);
    });
  }, []);

  function addEmployee(employee) {
    EmployeeServiceFetchApi.addEmployee(employee).then((res) => {
      setEmployees([...employees, res.data]);
    });
   
  }

  function editEmployee(updatedEmployee) {
    EmployeeServiceFetchApi.updateEmployee(updatedEmployee.id, updatedEmployee).then((res) => {
      setEmployees(employees.map((employee) => employee.id === updatedEmployee.id ? updatedEmployee : employee));
    });
  }
  
  function deleteEmployee(id) {
    EmployeeServiceFetchApi.deleteEmployee(id).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
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

export default App2;
