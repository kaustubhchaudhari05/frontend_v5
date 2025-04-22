import axios from 'axios';
import React, { useState } from 'react';

interface RegistrationFormData {
    name: string,
    email: string,
    password: string
}

const Register = () => {
    const [formData, setFormData]: any = useState({ name: '', email: '', password: '' });
    const [message, setMessage]: any = useState({});

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e?.target?.name]: e?.target?.value,
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            console.log(formData,"formData");
            const res = await axios.post('http://localhost:4000/auth/register', formData);
            setMessage(res?.data?.message);
            setFormData({ name: '', email: '', password: '' })
        } catch (err: any) {
            setMessage(err?.response?.data?.message);
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

                {message && (
                    <p style={{ color: 'green', marginTop: '15px' }}>{message.message}</p>
                )}
            </div>
        </>
    );
};

export default Register;