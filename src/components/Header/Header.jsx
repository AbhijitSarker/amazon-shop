import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user)

    const handleLogOut = () => {
        logOut();

    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='text-yellow-400'> {user.email} <button onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;