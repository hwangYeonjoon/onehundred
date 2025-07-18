import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                background: 'white',
                borderBottom: '1px solid #eee',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                zIndex: 1000,
            }}
        >
            <Link to="/home" style={{ textDecoration: 'none', color: '#333' }}>
                🏠 홈
            </Link>
            <Link to="/gallery" style={{ textDecoration: 'none', color: '#333' }}>
                📸 우리들의 추억
            </Link>
            <Link to="/letter" style={{ textDecoration: 'none', color: '#333' }}>
                💌 편지
            </Link>
        </nav>
    );
}

export default Navbar;