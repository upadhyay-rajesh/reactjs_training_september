import React, { useState } from 'react';
function StateHookComponent() {
    const[name, setName] = useState("Rajesh");
    return ( 
        <div>
            <h2>State Hook Example</h2>
            <h3>My Name is {name}</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
     );
}

export default StateHookComponent;