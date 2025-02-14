import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post

    const postStyle = {
        border: '2px solid blue',
        padding: '16px',
        borderRadius: '20px'
    }
    return (
        <div style={postStyle}>
            <h4>Post id:{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Detail</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;