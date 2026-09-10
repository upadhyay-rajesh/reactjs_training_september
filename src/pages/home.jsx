import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomeComponent({employees, deleteEmployee}) {
    const navigate = useNavigate();
    return (<div>
        <h1>Home Component</h1>
        <button onClick={() => navigate("/add-employee")}>Add Employee</button>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.department}</td>
                        <td>
                            <Link to={`/view-employee/${employee.id}`}>View</Link> |
                            <Link to={`/edit-employee/${employee.id}`}>Edit</Link> |
                           
                            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            <button onClick={() => navigate(`/edit-employee/${employee.id}`)}>Edit</button>
                            <button onClick={() => navigate(`/view-employee/${employee.id}`)}>View</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div> 
     );
}

export default HomeComponent;