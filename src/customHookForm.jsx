import React from "react";
import useFetch from "./useFetch";
import { useEffect } from "react";
function CustomHookFormComponent() {

  

  
     const{
        data: employees,
        loading,
        error
    } = useFetch("http://localhost:12000/employee");


    

    if(loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error: {error}</div>;
    }

    return ( 
        <div>
            <h2>Custom Hook Form Component</h2>
            <p>Number of employees: {employees.length}</p>
             {
            

            employees.map((employee) => (
                <div key={employee.id}>
                    <p>Name: {employee.name}</p>
                </div>
            ))}
           
        </div>
     );
}

export default CustomHookFormComponent;