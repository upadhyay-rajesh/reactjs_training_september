import React, { useRef } from 'react';
function MyFormComponent() {
    const nameRef = useRef();

    function handleClick() {
        alert(`Name: ${nameRef.current.value}`);
    }
    return ( 
        <div>
            <h2>My Form Component</h2>
            <div>
                <input type="text" placeholder="Enter your name" ref={nameRef}/>
                <button onClick={handleClick}>click me</button>
            </div>
        </div>
     );
}

export default MyFormComponent;