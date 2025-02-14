import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Nav Section</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/contract'>Contract Us</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;