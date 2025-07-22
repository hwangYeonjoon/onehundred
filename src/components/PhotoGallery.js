import React from 'react';
import { motion } from 'framer-motion';

// ✅ 공백 제거!
const photos = Array.from({ length: 37 }, (_, i) => {
    const num = String(i + 1).padStart(3, '0');
    return `/images/ ${num}.jpeg`;
});

// ✅ 부모 애니메이션: 자식 순차 등장
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 1,      // 1초 후 시작
            staggerChildren: 0.2,  // 0.2초 간격으로 하나씩
        },
    },
};

// ✅ 각 이미지에 적용될 애니메이션
const photoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

function PhotoGallery() {
    return (
        <section id="gallery" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '1.5rem' }}>
                📸 우리 추억들
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '12px',
                }}
            >
                {photos.map((src, index) => (
                    <motion.img
                        key={index}
                        variants={photoVariants}
                        src={src}
                        alt={`memory-${index}`}
                        style={{
                            flex: '1 1 calc(33% - 12px)',
                            maxWidth: 'calc(33% - 12px)',
                            minWidth: '140px',
                            height: 'auto',
                            borderRadius: '10px',
                            objectFit: 'cover',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
}

export default PhotoGallery;