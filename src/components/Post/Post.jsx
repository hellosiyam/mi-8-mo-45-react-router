import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post

    const navigate = useNavigate()
    const postStyle = {
        border: '2px solid blue',
        padding: '16px',
        borderRadius: '20px'
    }

    const showDetailHandel =() => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h4>Post id:{id}</h4>
            <p>{title}</p>
            <button onClick={showDetailHandel}>Detail</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;