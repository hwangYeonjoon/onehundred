import React, { useState } from 'react';

function FreeBoard() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim()) {
            setPosts([{ content: input, date: new Date().toLocaleString(), comments: [] }, ...posts]);
            setInput('');
        }
    };

    const handleCommentSubmit = (index, comment) => {
        if (comment.trim()) {
            const newPosts = [...posts];
            newPosts[index].comments.push({
                content: comment,
                date: new Date().toLocaleString(),
            });
            setPosts(newPosts);
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>📝 자유 게시판</h2>
            <textarea
                rows={4}
                placeholder="자유롭게 글을 써보세요!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <button onClick={handleSubmit}>작성</button>

            <ul>
                {posts.map((post, index) => (
                    <li key={index} style={{ margin: '2rem 0', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                        <p>{post.content}</p>
                        <small>{post.date}</small>

                        <div style={{ marginTop: '1rem' }}>
                            <CommentSection
                                comments={post.comments}
                                onSubmit={(comment) => handleCommentSubmit(index, comment)}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function CommentSection({ comments = [], onSubmit }) {
    const [commentInput, setCommentInput] = useState('');

    const handleSubmit = () => {
        if (commentInput.trim()) {
            onSubmit(commentInput);
            setCommentInput('');
        }
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <textarea
                rows={2}
                placeholder="댓글을 입력하세요"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            <button onClick={handleSubmit}>댓글 작성</button>

            <ul style={{ marginTop: '1rem' }}>
                {comments.map((cmt, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <p style={{ margin: 0 }}>{cmt.content}</p>
                        <small>{cmt.date}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FreeBoard;