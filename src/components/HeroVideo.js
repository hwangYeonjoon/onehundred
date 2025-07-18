import React from 'react';

function HeroVideo() {
    return (
        <section style={{ textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#ff69b4' }}>
                나래 ❤️ 연준 <br /> 100일 축하해!
            </h1>
            <video
                controls
                style={{ width: '29%', borderRadius: '1rem', marginTop: '1rem' }}
                src="/videos/100video.mp4"
            />
        </section>
    );
}

export default HeroVideo;