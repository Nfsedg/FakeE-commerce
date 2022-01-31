import React from 'react';
import { useInitialState } from '../../hooks/useInitialState';

export const ProfileCard = () => {
    const { token } = useInitialState();
    console.log(token)

    return(
        <div>
            <img src="" alt="" />
            <h2>User1</h2>
        </div>
    )
}