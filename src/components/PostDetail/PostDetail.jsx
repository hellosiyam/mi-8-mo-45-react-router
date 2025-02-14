import { useLoaderData } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const {userId, title, body} = post
    return (
        <div>
            <h4>User Id is : {userId}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;