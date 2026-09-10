import React from 'react';
function StateHookAdvanceComponent() {
    const [employee, setEmployee] = React.useState({
        name: "Rajesh",
        email: "abc@yahoo.com",
        password: "123456",
        country: "India",
        age: 30
    });

const updateEmail=()=>{
    setEmployee(previousValue => {
        return {...previousValue, email:"cc@gmail.com"}
    });

}


    const[color, setColor] = React.useState(["red", "green", "blue", "yellow"]);

    const[name, setName] = React.useState("Rajesh");
    const[email, setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");
    const[country, setCountry] = React.useState("");
    const[age, setAge] = React.useState(0);

    return ( 
        <div>
            <h2>State Hook Advance Example</h2>
            <button onClick={updateEmail}>Update Email</button>
            <h3>Employee Name is {employee.name}</h3>
            <h3>Employee Email is {employee.email}</h3>
            <h3>Employee Password is {employee.password}</h3>
            <h3>Employee Country is {employee.country}</h3>
            <h3>Employee Age is {employee.age}</h3>
        </div>
     );
}


export default StateHookAdvanceComponent;