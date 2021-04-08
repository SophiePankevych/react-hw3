import React from 'react';

export const UsersList = ({users}) => {
    return (

        <div>
            {
                users.map(user =>
                <div key={user.id}>
                    <h4>{user.name} {user.username}</h4>
                    <span>{user.email}, {user.phone}</span>
                </div>)
            }
        </div>
    )
}