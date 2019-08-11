import React from 'react';
import styles from './style.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-list-item">Items</li>
                <li className="navbar-list-item">Cart</li>
            </ul>
        </nav>
    );
}

export default Navbar;
