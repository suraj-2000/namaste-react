// import User from "./User";
// import UserClass from "./UserClass";
// const Contact = () => {
//     return (
//         <div>
//             <User
//             name="Suraj Singh"
//             location="Gorakhpur"
//             contact="surajsingh@gmail.com"
//             />
//             <UserClass
//             name="Suraj Singh"
//             location="Gorakhpur"
//             contact="surajsingh@gmail.com"
//             />
//         </div>
//     );
// }
// export default Contact;


import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Contact extends React.Component {
    render() {
        return (
            <div>
            <User
            name="Suraj Singh"
            location="Gorakhpur"
            contact="surajsingh@gmail.com"
            />
            <UserClass
            name="Suraj Singh"
            location="Gorakhpur"
            contact="surajsingh@gmail.com"
            />
        </div>
        );
    };
}

export default Contact;