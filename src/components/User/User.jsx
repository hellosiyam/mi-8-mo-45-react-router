import PropTypes from "prop-types";

const User = ({ user }) => {
    const { name, email, phone } = user;

    const userStyle = {
        border: '2px solid orange',
        padding: '16px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}

export default User;