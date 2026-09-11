import userContext from "./usercontext";
function EmployeeForm() {
    return ( 
        <userContext.Consumer>
            {user => (
                <div>
                    <h2>Employee Form</h2>
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </userContext.Consumer>
     );
}

export default EmployeeForm;