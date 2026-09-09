import EmployeeComponent from "./employee";

function SignInComponent() {
    var name = 'Jhon';
    var email = 'abc@yahoo.com';
    var age = '30';
    var employee = {id:2, name:'Jhon', email:'abc@yahoo.com'};
    var colors = ['orange', 'pink', 'purple', 'brown'];

    return ( 
        <div>

            <EmployeeComponent name={100} age="45" email={200} />

            <h2>Sign In</h2>
            <form>
                <input type="email" placeholder='Enter your email' /> <br></br>
                <input type="password" placeholder='Enter your password' /> <br></br>
                <button>Sign In</button>
            </form>
            <h3>Welcome {name}</h3>
            <p>This is your email: {email}</p>
            <h3>Employee Details</h3>
            <p>Employee Id: {employee.id}</p>
            <p>Employee Name: {employee.name}</p>
            <p>Employee Email: {employee.email}</p>
            <h3>Favorite Colors</h3>
            {colors.map((color, index) => (
                <span key={index} style={{ color: color }}>
                    {color} <br></br>
                </span>
            ))}
        </div>
     );
}

export default SignInComponent;