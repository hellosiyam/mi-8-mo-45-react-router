import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const post = useLoaderData();
    const {userId, title, body} = post

    const {postId} = useParams()

    const navigate = useNavigate();

    const backHandel = () => {
        navigate(-1)
    }
    console.log(postId);
    
    return (
        <div>
            <h4>User Id is : {userId}</h4>
            <h5>{title}</h5>
            <p>{body}</p>
            <button onClick={backHandel}>Back</button>
        </div>
    );
};

export default PostDetail;