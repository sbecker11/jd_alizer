import React, { useState, useEffect } from 'react';

function About() {
    // Define a state variable 'count' and its corresponding setter function 'setCount'
    const [count, setCount] = useState(localStorage.getItem('count') || 0);

    // Update the stored value in localStorage whenever 'count' changes
    useEffect(() => {
        localStorage.setItem('count', `${count}`);
    }, [count]);
    
    // Use 'count' and 'setCount' to manage and update the state
    const increment = () => {
        setCount(`${parseInt(count) + 1}`);
    };

    return (
        <div>
        <h2>About Us</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla gravida, est eget interdum hendrerit, nulla arcu placerat est, 
            non feugiat dui quam ac nulla. Sed nec bibendum nunc. 
            Nulla varius mi ut odio varius, vel dictum velit dictum.
        </p>
        <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default About;
