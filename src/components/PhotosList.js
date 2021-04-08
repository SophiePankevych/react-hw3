import React from 'react';

export const PhotosList = ({photos}) => {
    return (
        <div>
            {
                photos.map(photo =>
                <div key={photo.id}>
                    <h3>{photo.title}</h3>
                    <p>{photo.url}</p>
                </div>
                )
            }
        </div>
    )
}