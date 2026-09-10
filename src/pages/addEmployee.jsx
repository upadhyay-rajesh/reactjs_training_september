import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function AddEmployeeComponent({ addEmployee }) {

    const navigate = useNavigate();

    const[employee, setEmployee] = useState({
        id: '',
        name: '',
        email: '',
        salary: '',
        department: ''
    });
    return ( 
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={(e) => {
                
                e.preventDefault();
                addEmployee(employee);
                navigate("/");
            }
            }>
                <label>ID:</label>
                <input type="text" value={employee.id} onChange={(e) => setEmployee({ ...employee, id: e.target.value })} />
                <label>Name:</label>
                <input type="text" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                <label>Email:</label>
                <input type="email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
                <label>Salary:</label>
                <input type="number" value={employee.salary} onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} />
                <label>Department:</label>
                <input type="text" value={employee.department} onChange={(e) => setEmployee({ ...employee, department: e.target.value })} />
                <button type="submit">Add Employee</button>
            </form>
        </div>
     );
}

export default AddEmployeeComponent;