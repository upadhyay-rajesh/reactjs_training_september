import React from "react";
import userContext from "./usercontext";
import Header from "./header";
import EmployeeForm from "./employeeform";
import MyFormComponent from "./myForm";
import CustomHookFormComponent from "./customHookForm";
function AppContext() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com"
    };
    return (
        <userContext.Provider value={user}>
            <Header />
            <EmployeeForm />
            <MyFormComponent />
            <CustomHookFormComponent />
        </userContext.Provider>
        
    );

}
export default AppContext;