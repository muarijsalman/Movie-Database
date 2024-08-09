import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentForm = ({ addComment }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== '') {
            addComment({ text });
            setText('');
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group controlId="formCommentText">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter your comment" 
                                value={text} 
                                onChange={(e) => setText(e.target.value)} 
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default CommentForm;
