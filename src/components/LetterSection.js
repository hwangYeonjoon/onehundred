import React from 'react';

function LetterSection() {
    return (
        <section
            id="letter"
            style={{
                background: '#fff0f5',
                padding: '8vw 5vw',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    background: '#ffffff',
                    padding: '5vw',
                    borderRadius: '20px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                    maxWidth: '700px',
                    width: '100%',
                    fontFamily: "'Noto Serif KR', serif",
                    lineHeight: '1.8',
                    color: '#333',
                }}
            >
                <h2
                    style={{
                        fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                        fontWeight: 'bold',
                        color: '#d6336c',
                        marginBottom: '2rem',
                        textAlign: 'center',
                    }}
                >
                    💌 연준이가 나래에게
                </h2>

                <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '2rem' }}>
                    자기야, 벌써 <strong>100일</strong>이야.<br />
                    우리가 처음 손을 잡고 , 말을 편하게하고 , 함께 걷기 시작한 게 엊그제 같은데,<br />
                    벌써 이렇게 많은 추억이 쌓였다는 게 신기하고 행복해.<br />
                    <br />
                    내가 화면은 예쁘게 못찍으니까 그래도 이해해주고 ㅎㅎ ^^<br />
                    100일 동안 우리는 웃는 날들만 가득했지.<br />
                    서로에게 맞춰가고 배려하면서 자연스럽게 함께였고,<br />
                    그래서 더 소중하고 고마운 순간들이 하나하나 기억에 남아.<br />
                    <br />
                    너는 항상 나에게 따뜻했고, 그 따뜻함 덕분에 나도 더 좋은 사람이 되고 싶어졌어.<br />
                    너의 웃음, 말투, 눈빛 하나하나가 날 기분 좋게 만들었고,<br />
                    그런 너와 함께하는 하루하루가 나에게는 선물 같은 시간이었어.<br />
                    <br />
                    앞으로도 지금처럼 우리, 서로를 아껴주고, 응원해주고,<br />
                    오늘처럼 웃는 얼굴로 함께하는 날이 계속되면 좋겠어.<br />
                    <br />
                    ps - 언제든 힘들면 빠꾸해 언제나 자기 뒤엔 내가 있으니까 ㅎㅎ (황관식)
                </p>

                <p
                    style={{
                        fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
                        color: '#ff4d4f',
                        textAlign: 'center',
                        fontWeight: '600',
                        lineHeight: '2',
                    }}
                >
                    언제나 네 편이 되어줄게.<br />
                    너라는 사람을 만나게 돼서 정말 고마워.<br />
                    그리고 많이 사랑해, 나래야. ❤️
                </p>
            </div>
        </section>
    );
}

export default LetterSection;