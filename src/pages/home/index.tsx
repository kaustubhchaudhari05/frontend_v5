import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Register, { endpoint } from "../register";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import '../../styles/custome.css';
import axios from "axios";

const HomePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState({ message: '' });
    const [statusCode, setStatusCode] = useState({ code: 0 })

    const handleOnChange = async (e: any) => {
        setFormData({
            ...formData,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${endpoint}/register`, formData);
            console.log(res, "res");
            setStatusCode({ code: res?.status })
            setMessage({ message: res?.data?.message });
            setFormData({ name: '', email: '', password: '' })
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (err: any) {
            setStatusCode({ code: err?.response?.status })
            console.log(err?.response?.data?.message, "err?.response?.data?.message");
            // setMessage(err?.response?.data?.message);
            setMessage({ message: err?.response?.data?.message });
        }
    }

    // const registerPageNav = () => {
    //     navigate('/register')
    // }

    return (
        <>
            <Container fluid className="register-container d-flex align-items-center justify-content-center">
                <Row className="register-box shadow-lg rounded-4 overflow-hidden">
                    <Col md={6} className="left-panel d-none d-md-flex align-items-center justify-content-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                            alt="Illustration"
                            className="img-fluid"
                            style={{ maxHeight: '300px' }}
                        />
                    </Col>
                    <Col md={6} className="p-5 right-panel">
                        <div className="text-end mb-3">
                            <small>Already have an account?</small>{' '}
                            <Button variant="link" className="p-0" onClick={() => navigate('/login')} >Sign in</Button>
                        </div>

                        <h2 className="mb-2">Welcome to Focus!</h2>
                        <p className="text-muted mb-4">Register your account</p>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter your name" value={formData?.name} onChange={handleOnChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData?.email} onChange={handleOnChange} />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="8+ characters" value={formData?.password} onChange={handleOnChange} />
                            </Form.Group>

                            {message &&
                                <p style={{ color: statusCode?.code === 201 ? 'green' : 'red', marginTop: '15px' }}>{message?.message}</p>}
                            <Button variant="primary" className="w-100 mb-3" type="submit">
                                Register
                            </Button>
                        </Form>

                        <div className="text-center mt-3">
                            <p className="text-muted">Create account with</p>
                            <div className="d-flex justify-content-center gap-3">
                                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={28} />
                                <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width={28} />
                                <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" width={28} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="d-flex w-100">
                <div className="d-flex w-100">
                <h4 className="align-items-start">Hello!!!</h4>
                <div className="align items-end">
                <div className="align-items-end btn btn-primary" onClick={() => navigate( `/register`)}>Register</div>
                <div className="align-items-end btn btn-primary ms-4" onClick={() => navigate( `/login`)}>Login</div>
                </div>
                </div>
            </div> */}
        </>
    )
}

export default HomePage;