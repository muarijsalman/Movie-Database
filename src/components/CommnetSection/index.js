import React, { useState } from 'react';
import CommentForm from '../Comment';
import { ListGroup } from 'react-bootstrap';

const CommentSection = () => {
    const [comments, setComments] = useState([]);

    const addComment = (comment) => {
        setComments([comment, ...comments]);
    };

    return (
        <div>
            <CommentForm addComment={addComment} />

            <ListGroup variant="flush">
                {comments.map((comment, index) => (
                    <ListGroup.Item key={index}>{comment.text}</ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default CommentSection;
