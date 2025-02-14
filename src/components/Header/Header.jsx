import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Nav Section</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/contract'>Contract Us</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;