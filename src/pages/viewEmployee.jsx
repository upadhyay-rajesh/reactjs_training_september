import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ViewEmployeeComponent( { employees } ) {
    const {id} = useParams();
    const navigate = useNavigate();

    const employee = employees.find((emp) => emp.id === Number(id));
   

    if (!employee) {
        return (<h2>Employee not found</h2>);
    }
    return ( 
        <div>
            <h1>ViewEmployeeComponent Component</h1>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
     );
}

export default ViewEmployeeComponent;