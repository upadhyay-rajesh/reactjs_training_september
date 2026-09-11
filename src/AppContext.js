import React from "react";
import userContext from "./usercontext";
import Header from "./header";
import EmployeeForm from "./focus";
import MyFormComponent from "./myForm";
import CustomHookFormComponent from "./customHookForm";
import VideoPlayer from "./media";
function AppContext() {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com"
    };
    return (
        <userContext.Provider value={user}>
            <Header />
           
            <MyFormComponent />
            <CustomHookFormComponent />
            <VideoPlayer />
            <EmployeeForm />
        </userContext.Provider>
        
    );

}
export default AppContext;