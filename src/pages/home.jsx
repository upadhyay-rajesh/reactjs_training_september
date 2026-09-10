import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeComponent extends Component {

    state = { 
        employees: []
     } 

     addEmployee = () => {
        this.props.history.push('/add-employee');
     }

    render() { 
        this.state.employees = this.props.employees;
        return (
            <div>
                <h1>Home Component</h1>
                <Link to="/add-employee">Add Employee</Link>
                <button onClick={this.addEmployee}>Add Employee</button>
                <br /><br />
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.department}</td>
                                <td><Link to={`/view-employee/${employee.id}`}>View</Link></td>
                                <td><Link to={`/edit-employee/${employee.id}`}>Edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default HomeComponent;