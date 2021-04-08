import React from 'react';

export const CommentsList = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment =>
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <h6>{comment.email}</h6>
                    <p>{comment.body}</p>
                </div>)
            }
        </div>
    )
}