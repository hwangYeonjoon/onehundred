import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FreeBoard() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await axios.get('/api/board/posts');
            setPosts(res.data);
        } catch (err) {
            console.error('게시글 불러오기 실패:', err);
        }
    };

    const handleSubmit = async () => {
        if (input.trim()) {
            try {
                const res = await axios.post('/api/board/posts', {
                    content: input,
                });
                setPosts([res.data, ...posts]); // 새 글 추가
                setInput('');
            } catch (err) {
                console.error('글 작성 실패:', err);
            }
        }
    };

    const handleCommentSubmit = async (postId, comment) => {
        if (comment.trim()) {
            try {
                const res = await axios.post('/api/board/comments', {
                    postId,
                    content: comment,
                });

                // 해당 post에 댓글 추가
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.id === postId
                            ? { ...post, comments: [...post.comments, res.data] }
                            : post
                    )
                );
            } catch (err) {
                console.error('댓글 작성 실패:', err);
            }
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
                {posts.map((post) => (
                    <li key={post.id} style={{ margin: '2rem 0', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                        <p>{post.content}</p>
                        <small>{post.date}</small>

                        <div style={{ marginTop: '1rem' }}>
                            <CommentSection
                                comments={post.comments || []}
                                onSubmit={(comment) => handleCommentSubmit(post.id, comment)}
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