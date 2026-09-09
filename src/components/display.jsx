import React, { Component } from 'react';

class DisplayContentComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>Display Content</h2>
                <h3>Welcome {this.props.myname}</h3> 
                this is your email: {this.props.myemail} <br></br>
                <h3>Employee Details</h3>
                Employee Id: {this.props.myemployee.id} <br></br>
                Employee Name: {this.props.myemployee.name} <br></br>
                Employee Email: {this.props.myemployee.email} <br></br>
                <h3>Favorite Colors</h3>
                {this.props.mycolors.map((color, index) => (
                    <span key={index} style={{ color: color }}>
                        {color} <br></br>
                    </span>
                ))}
            </div>
        );
    }
}
 
export default DisplayContentComponent;