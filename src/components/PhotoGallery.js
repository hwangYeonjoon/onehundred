import React from 'react';
import { motion } from 'framer-motion';

// 공백 포함된 파일명 대응
const photos = Array.from({ length: 25 }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return `/images/ ${num}.jpeg`;
});

const photoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

function PhotoGallery() {
    return (
        <section  id="gallery" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📸 우리 추억들</h2>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '16px',
                }}
            >
                {photos.map((src, index) => (
                    <motion.img
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={photoVariants}
                        src={src}
                        alt={`memory-${index}`}
                        style={{
                            width: '180px',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default PhotoGallery;