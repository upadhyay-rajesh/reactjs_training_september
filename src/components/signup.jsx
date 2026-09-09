import React, { Component } from 'react';
import DisplayContentComponent from './display';

//class based component must be child of Component class of react library
//using extends keyword we can inherit the properties of parent class
class SignUPComponent extends Component {
    state = { name:'Rajesh',
                email:'abc@gmail.com',
                employee:{id:1, name:'Rajesh', email:'abc@gmail.com'},//object of employee

                colors:['red', 'green', 'blue', 'yellow'] //array of colors

      }  //all local variables are stored in state object
    render() { 
        return (
            <div>

                <DisplayContentComponent myname={this.state.name} myemail={this.state.email} myemployee={this.state.employee} mycolors={this.state.colors} />

                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder='Enter your name' /> <br></br>
                    <input type="email" placeholder='Enter your email' /> <br></br>
                    <input type="password" placeholder='Enter your password' /> <br></br>
                    <button>Sign Up</button>
                </form>

                
            </div>
        );
    }
}
 
export default SignUPComponent;