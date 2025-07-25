import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Header = () => {
    const [loginUser, setLoginUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setLoginUser(user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        message.success("Logout Successfully");
        setLoginUser('');
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Expense Management</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            {loginUser && (
                                <>
                                    <li className="nav-item">
                                        <span className="navbar-text">{loginUser.name}</span>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-primary ms-3" onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
