import axios from 'axios';
import React, { useState } from 'react';

export const endpoint = 'http://localhost:4000';

interface RegistrationFormData {
    name: string,
    email: string,
    password: string
}

const Register = () => {
    const [formData, setFormData]: any = useState({ name: '', email: '', password: '' });
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
            const res = await axios.post(`${endpoint}/register`, formData);
            console.log(res, "res");
            setMessage({ message: res?.data?.message });
            setFormData({ name: '', email: '', password: '' })
        } catch (err: any) {
            console.log(err?.response?.data?.message, "err?.response?.data?.message");
            // setMessage(err?.response?.data?.message);
            setErrorMessage({ message: err?.response?.data?.message });
        }
    };

    return (
        <>
            <div style={{ maxWidth: '400px', margin: 'auto' }}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /><br /><br />

                    <button type="submit">Register</button>
                </form>

                {message && !errorMessage ? (
                    <p style={{ color: 'green', marginTop: '15px' }}>{message?.message}</p>
                ) : <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage?.message}</p>}

                {/* {errorMessage && (
                    <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>
                )} */}
            </div>
        </>
    );
};

export default Register;