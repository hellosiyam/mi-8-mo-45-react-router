import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, phone, email} = user
    console.log(user);
    
    return (
        <div>
            <h2>{name}</h2>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default UserDetails;