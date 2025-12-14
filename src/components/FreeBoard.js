import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Prefer env var; fall back to deployed API in production, localhost in dev
const API_BASE =
    process.env.REACT_APP_BOARD_API ||
    (process.env.NODE_ENV === 'production'
        ? 'https://onehundred-api-jv7r.vercel.app'
        : 'http://localhost:4000');

function FreeBoard() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${API_BASE}/api/board`);
            setPosts(Array.isArray(res.data) ? res.data : []);
            setError('');
        } catch (err) {
            console.error('게시글 불러오기 실패:', err);
            setError('게시글을 불러오지 못했습니다. 서버가 실행 중인지 확인해주세요.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    useEffect(() => {
        const interval = setInterval(fetchPosts, 15000);
        return () => clearInterval(interval);
    }, [fetchPosts]);

    const handleSubmit = async () => {
        if (input.trim()) {
            try {
                const res = await axios.post(`${API_BASE}/api/board`, {
                    content: input.trim(),
                });
                setPosts((prev) => [res.data, ...prev]);
                setInput('');
            } catch (err) {
                console.error('글 작성 실패:', err);
                setError('글 작성에 실패했습니다.');
            }
        }
    };

    const handleCommentSubmit = async (postId, comment) => {
        if (comment.trim()) {
            try {
                const res = await axios.post(`${API_BASE}/api/board/${postId}/comments`, {
                    content: comment.trim(),
                });
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post.id === postId
                            ? { ...post, comments: [...(post.comments || []), res.data] }
                            : post
                    )
                );
            } catch (err) {
                console.error('댓글 작성 실패:', err);
                setError('댓글 작성에 실패했습니다.');
            }
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>📝 자유 게시판</h2>
            <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                날애랑 연주니의 게시판 키키
            </p>
            <textarea
                rows={4}
                placeholder="자유롭게 글을 써보세요!"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '100%', marginBottom: '1rem' }}
            />
            <button onClick={handleSubmit}>작성</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>불러오는 중...</p>}

            <ul>
                {posts.map((post) => (
                    <li key={post.id} style={{ margin: '2rem 0', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                        <p>{post.content}</p>
                        <small>{formatDate(post.date)}</small>

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

function CommentSection({ comments, onSubmit }) {
    const [commentInput, setCommentInput] = useState('');

    const handleSubmit = () => {
        if (commentInput.trim()) {
            onSubmit(commentInput);
            setCommentInput('');
        }
    };

    const safeComments = Array.isArray(comments) ? comments : [];

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
                {safeComments.map((cmt, idx) => (
                    <li key={cmt.id || `${idx}-${cmt.date}`} style={{ marginBottom: '0.5rem' }}>
                        <p style={{ margin: 0 }}>{cmt.content}</p>
                        <small>{formatDate(cmt.date)}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function formatDate(value) {
    if (!value) return '';
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleString('ko-KR');
}

export default FreeBoard;
