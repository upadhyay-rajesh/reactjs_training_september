import React, { Component } from 'react';

class RegisterComponent extends Component {
    state = { 
        name:'',
        email:'',
        password:''
     } 

     changeNameHandler = (e) => {
        this.setState({name:e.target.value});
    }
    changeEmailHandler = (e) => {
        this.setState({email:e.target.value});
    }
    changePasswordHandler = (e) => {
        this.setState({password:e.target.value});
    }

    saveRecord = (e) => {

        let employee = {name:this.state.name, email:this.state.email, password:this.state.password};
        alert("Record Saved Successfully!"+JSON.stringify(employee));
    }


    render() { 
        return (
            <div>
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder='Enter your name' value={this.state.name} onChange={this.changeNameHandler} /> <br></br>
                    <input type="email" placeholder='Enter your email' value={this.state.email} onChange={this.changeEmailHandler} /> <br></br>
                    <input type="password" placeholder='Enter your password' value={this.state.password} onChange={this.changePasswordHandler}/> <br></br>
                    <input type="button" value="Sign Up" onClick={this.saveRecord} /> <br></br>
                </form>
            </div>
        );
    }
}
 
export default RegisterComponent;