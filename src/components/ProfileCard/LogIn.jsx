import React from 'react';
import { loginService } from '../../services/Login';

export const Login = ({ setUser, setUserName, setPassword, username, password }) => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await loginService({
                username,
                password
            })
            setUser(user)
            console.log(user)
            setUserName('')
            setPassword('')
        } catch (e) {
            console.warn(e)
        }
        
       
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={username}
                name='username'
                placeholder='Username'
                onChange={({ target }) => {
                    setUserName(target.value)
                }}
                />
                <input 
                type="password" 
                value={password}
                name='password'
                placeholder='Password'
                onChange={({ target }) => setPassword(target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}