import React, { useState } from 'react';
import axios from 'axios'; 

const LoginSignup = () => {
    const [action, setAction] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleActionChange = () => {
        setAction(action === 'Login' ? 'Sign Up' : 'Login');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, email, password };
        let url = action === 'Login' ? 'http://localhost/my_project/login.php' : 'http://localhost/my_project/register.php';

        try {
            const response = await axios.post(url, formData);
            console.log(response.data); // Log response from PHP backend
            // Handle success or redirection here
        } catch (error) {
            console.error('Error:', error);
            // Handle error states
        }
    };

    return (
        <div className='container-login'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === 'Login' ? null : (
                    <div className='input'>
                        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                )}
                <div className='input'>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className='submit-container'>
                <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleSubmit}>
                    {action === 'Login' ? 'Login' : 'Sign Up'}
                </div>
                <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleActionChange}>
                    {action === 'Login' ? 'Sign Up' : 'Login'}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
