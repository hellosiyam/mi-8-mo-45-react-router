import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const {id, name, email, phone } = user;
    console.log(user);
    
    const userStyle = {
        border: '2px solid blue',
        padding: '16px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`} ><button>Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;