import { useState } from "react";
import { endpoint } from "../register";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData]: any = useState({ email: '', password: '' });
    const [message, setMessage]: any = useState({ message: '' });
    const [errorMessage, setErrorMessage]: any = useState({ message: '' });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e?.target?.name]: e?.target?.value,
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${endpoint}/login`, formData);
            console.log(res, "res");
            if (res?.status === 200) {
                navigate('/dashboard');
            }
            setMessage({ message: res?.data?.message });
            setFormData({ email: '', password: '' })
        } catch (err: any) {
            console.log(err?.response?.data?.message, "err?.response?.data?.message");
            // setMessage(err?.response?.data?.message);
            setErrorMessage({ message: err?.response?.data?.message });
        }
    };
    return (
        // <>
        //     <div style={{ maxWidth: '400px', margin: 'auto' }}>
        //         <h2>Register</h2>
        //         <form onSubmit={handleSubmit}>

        //             <input
        //                 type="email"
        //                 name="email"
        //                 placeholder="Email"
        //                 value={formData.email}
        //                 onChange={handleChange}
        //                 required
        //             /><br /><br />

        //             <input
        //                 type="password"
        //                 name="password"
        //                 placeholder="Password"
        //                 value={formData.password}
        //                 onChange={handleChange}
        //                 required
        //             /><br /><br />

        //             <button type="submit">Login</button>
        //         </form>

        //         {message && !errorMessage ? (
        //             <p style={{ color: 'green', marginTop: '15px' }}>{message?.message}</p>
        //         ) : <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage?.message}</p>}

        //         {/* {errorMessage && (
        //             <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>
        //         )} */}
        //     </div>
        // </>

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
                        <small>Don't have account</small>{' '}
                        <Button variant="link" className="p-0" onClick={() => navigate('/')}>Sign up</Button>
                    </div>

                    <h2 className="mb-2">Welcome to Focus!</h2>
                    <p className="text-muted mb-4">Login to your account</p>

                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your email" value={formData?.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="8+ characters" value={formData?.password} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" className="w-100 mb-3" type="submit">
                            Login
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

export default LoginPage;