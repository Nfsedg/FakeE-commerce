import React, { useState } from 'react';
import { Login } from './LogIn';

export const ProfileCard = () => {
    const [ user, setUser ] = useState('')
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')

    return(
        <div>
            {
                user
                    ? <div><p>Hello User 1</p><button onClick={() => setUser('')}>Logout</button></div>
                    : <Login 
                    user={user} 
                    setUser={setUser} 
                    username={username}
                    password={password}
                    setPassword={setPassword}
                    setUserName={setUserName}
                    />
            }
            
        </div>
    )
}