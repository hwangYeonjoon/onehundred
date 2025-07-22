import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function IntroGate() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuthenticated } = useAuth();

    useEffect(() => {
        setAuthenticated(false);
        localStorage.removeItem('auth');
    }, [setAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code === 'skfoduswns100') {
            setAuthenticated(true);
            localStorage.setItem('auth', 'true');
            navigate('/home');
        } else {
            setError('당신은 우리의 공간에 들어 올 수 없습니다');
        }
    };

    return (
        <div
            style={{
                padding: '2rem 1rem',
                textAlign: 'center',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                background: '#fdf6f9',
            }}
        >
            <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '0.8rem' }}>
                🔒 우리만의 공간
            </h1>

            <p style={{
                color: '#ff4d4f',
                fontWeight: '600',
                fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
                marginBottom: '1.5rem'
            }}>
                ⚠️ 허락되지 않은 사람 및 무단 침입은 수사 대상이 될 수 있습니다
            </p>

            <p style={{ fontSize: 'clamp(1rem, 3.5vw, 1.3rem)', marginBottom: '2rem' }}>
                접근 코드(우리의 백일)를 입력해주세요
            </p>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="코드를 입력하세요"
                    style={{
                        padding: '0.6rem 1rem',
                        fontSize: '1rem',
                        width: 'min(100%, 300px)',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '0.6rem 1.5rem',
                        fontSize: '1rem',
                        backgroundColor: '#ff69b4',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        width: 'min(100%, 150px)',
                    }}
                >
                    입장
                </button>
            </form>

            {error && (
                <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.95rem' }}>{error}</p>
            )}
        </div>
    );
}

export default IntroGate;