import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function IntroGate() {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setAuthenticated } = useAuth();

    useEffect(() => {
        // 페이지 진입 시 인증 초기화
        setAuthenticated(false);
        localStorage.removeItem('auth'); // 인증 상태를 저장하고 있었다면 삭제
    }, [setAuthenticated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (code === "skfoduswns100") {
            setAuthenticated(true);
            localStorage.setItem('auth', 'true'); // 원하면 인증 상태 저장
            navigate('/home');
        } else {
            setError('당신은 우리의 공간에 들어 올 수 없습니다');
        }
    };

    return (
        <div style={{ padding: '3rem', textAlign: 'center' }}>
            <h1>🔒 우리만의 공간</h1>
            <p>접근 코드(우리의 백일)를 입력해주세요</p>
            <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
                <input
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="코드를 입력하세요"
                    style={{ padding: '0.5rem', fontSize: '1rem' }}
                />
                <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
                    입장
                </button>
            </form>
            {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
}

export default IntroGate;