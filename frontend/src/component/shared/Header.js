import React from 'react';

function Header(){
    return(
        <>
            <header>
            <div className="container">
                <a href="/" className="logo">Ocean Of Food</a>
                <nav>
                    <ul>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        <li className="menu-container">
                            <a href="/dashboard">John</a>
                            <div className="menu">
                                <a href="/profile">Profile</a>
                                <a href="/orders">Orders</a>
                                <a href='/logout'>Logout</a>
                            </div>
                        </li>
                        <li>
                            <a href="/cart-page">
                                Cart <span>3</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </header>
        </>
    )
}
export default Header;