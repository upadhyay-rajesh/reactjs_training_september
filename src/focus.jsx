import React, { useRef } from "react";

function EmployeeForm() {

    const nameRef = useRef();

    function focusName() {
        nameRef.current.focus();
    }

    return (
        <div>

            <h2>Add Employee</h2>

            <label>
                Employee Name:
            </label>

            <input
                ref={nameRef}
                type="text"
                placeholder="Enter employee name"
            />

            <br />
            <br />

            <label>
                Email:
            </label>

            <input
                type="email"
                placeholder="Enter email"
            />

            <br />
            <br />

            <button onClick={focusName}>
                Focus Name
            </button>

        </div>
    );
}

export default EmployeeForm;