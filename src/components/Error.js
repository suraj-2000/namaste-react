
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div className="popup-overlay"></div>
        <div className="popup">
            <h2>Oops!!</h2>
            <h3>Something went wrong.</h3>
            <button className="close-button" onClick={() => {
                navigate("/");
            }}>Close</button>
        </div>
        </div>
    );
};

export default Error;