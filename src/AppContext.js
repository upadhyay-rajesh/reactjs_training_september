import React from "react";
import userContext from "./usercontext";
import Header from "./header";
import EmployeeForm from "./employeeform";
function AppContext() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com"
    };
    return (
        <userContext.Provider value={user}>
            <Header />
            <EmployeeForm />
        </userContext.Provider>
    );

}
export default AppContext;