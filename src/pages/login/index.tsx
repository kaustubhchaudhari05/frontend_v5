import { useState } from "react";
import { endpoint } from "../register";
import axios from "axios";

const LoginPage = () => {
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
            setMessage({ message: res?.data?.message });
            setFormData({  email: '', password: '' })
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

                    <button type="submit">Login</button>
                </form>

                {message && !errorMessage ? (
                    <p style={{ color: 'green', marginTop: '15px' }}>{message?.message}</p>
                ) : <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage?.message}</p>}

                {/* {errorMessage && (
                    <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>
                )} */}
            </div>
        </>
    )
}

export default LoginPage;