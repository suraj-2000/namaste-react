import { useState } from "react";

const User = (props) => {
    const {name, location, contact} = props;
    const [count, setCount] = useState(0);
    return (
<div className="w-4/12 h-auto border-2 mx-auto my-20 p-6 rounded shadow-md bg-white flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-2">Functional Component</h2>
  <h2 className="text-lg font-medium mb-1">Name: {name}</h2>
  <h3 className="text-md text-gray-600 mb-1">Location: {location}</h3>
  <h4 className="text-sm text-gray-500 mb-4">Contact: {contact}</h4>
  <div className="countFix flex items-center space-x-4">
    <button 
      onClick={() => setCount(count + 1)} 
      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Count Increase
    </button>
    <p className="text-lg font-bold">{count}</p>
  </div>
</div>


    );
};

export default User;