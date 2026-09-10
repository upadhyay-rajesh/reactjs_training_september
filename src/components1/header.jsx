import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

    state = {  } 
    render() { 
        return (
            <header>
                <h1>Employee Management System</h1>
                <nav>
                    <Link to="/">Home</Link> {"   |   "}
                    <Link to="/add-employee">Add Employee</Link>
                 
                </nav>
            </header>
        );
    }
}
 
export default HeaderComponent;