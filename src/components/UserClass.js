import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log(props.name + " Constructor is Called");
    }
    render() {
        const {name, contact, location} = this.props;
        const {count} = this.state;
         console.log(name + " Render is Called");
        return (
            <div className="cardType">
                <h2>Class Component</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
                <button onClick={() => {
                    this.setState( {
                        count: this.state.count+1,
                    })
                }}>Count Increase </button>
                <p>{count}</p>
            </div>
        );

    };
};

export default UserClass;