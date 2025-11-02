const Header = () => {
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hcs6jrSmJM4V88uVtHWRNtaGQBswGqAp-7_-AeBO56QcRGZnfWZ2SRw&s"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>

    );
};

export default Header;