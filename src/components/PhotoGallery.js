import React from 'react';
import { motion } from 'framer-motion';

// 이미지 배열 (공백 제거 주의!)
const photos = Array.from({ length: 37 }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return `/images/ ${num}.jpeg`;
});

// 하트 모양을 구성하는 행 배열
const heartPattern = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22],
    [23, 24, 25],
    [26, 27],
    [28],
];

// 부모 컨테이너 애니메이션
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.8,
            staggerChildren: 0.2,
        },
    },
};

// 이미지 개별 애니메이션
const photoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
};

function PhotoGallery() {
    return (
        <section id="gallery" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '2rem' }}>
                💖 우리 추억들
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                {heartPattern.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                        }}
                    >
                        {row.map((idx) => {
                            const src = photos[idx];
                            return (
                                <motion.img
                                    key={idx}
                                    variants={photoVariants}
                                    src={src}
                                    alt={`memory-${idx}`}
                                    style={{
                                        width: 'min(18vw, 70px)',
                                        height: 'min(18vw, 70px)',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        boxShadow:
                                            '0 0 10px rgba(255, 105, 180, 0.6), 0 0 20px rgba(255, 105, 180, 0.3)',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    whileHover={{ scale: 1.15 }}
                                />
                            );
                        })}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default PhotoGallery;