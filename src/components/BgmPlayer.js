import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function BgmPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const location = useLocation();

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play().catch(() => {});
            setPlaying(true);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop preload="auto" src="/music/videoplayback.mp3" />
            {/* 🎵 음악 토글 버튼 */}
            {location.pathname !== '/' && (
                <button
                    onClick={toggleAudio}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        background: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: '20px',
                        padding: '10px 14px',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        zIndex: 9999,
                    }}
                >
                    {playing ? '🔇 음악 끄기' : '🎵 음악 켜기'}
                </button>
            )}
        </>
    );
}

export default BgmPlayer;
