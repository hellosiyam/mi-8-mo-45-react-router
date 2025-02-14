import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, email} = user
    const navigate = useNavigate();
    const goBackHandel = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            <button onClick={goBackHandel}>Go Back</button>
        </div>
    );
};

export default UserDetails;