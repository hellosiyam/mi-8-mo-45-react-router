import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page is not found</h3>
                    <p>Go back Home Page</p>
                    <Link to={'/'}><button>Go Back Home</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;