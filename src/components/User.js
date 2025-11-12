import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count, setCount] = useState(0);
    return (
        <div className="cardType">
            <h2>Functional Component</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: {contact}</h4>
            <div className="countFix">
            <button onClick={()=> {
                setCount(count+1);
            }}>Count Increase</button>
            <p>{count}</p>
            </div>
        </div>
    );
};

export default User;