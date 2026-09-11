import userContext from "./usercontext";
function Header() {
    return ( 
       <userContext.Consumer>
            {user => (
                <div>
                    <h2>Header Component</h2>
                    <h1>Welcome, {user.name}!</h1>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </userContext.Consumer>
     );
}

export default Header;