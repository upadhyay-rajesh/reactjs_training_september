import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function EditEmployeeComponent( { employees, editEmployee } ) {
    const {id} = useParams();
    const navigate = useNavigate();

    const employee = employees.find((emp) => emp.id === parseInt(id));
    const[formData, setFormData] = useState(
        employee
    );

    if (!employee) {
        return (<h2>Employee not found</h2>);
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        editEmployee(formData);
        navigate("/");
    }

    return ( 
        <div>
            <h1>Edit Employee Component</h1>
            <form onSubmit={handleSubmit}>
                <label>ID:</label>
                <input type="text" name="id" value={formData.id} onChange={handleChange} />
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Salary:</label>
                <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
                <label>Department:</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} />
                <button type="submit">Update Employee</button>
            </form>
        </div>
     );
}

export default EditEmployeeComponent;