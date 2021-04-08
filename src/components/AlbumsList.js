import React from 'react';

export const AlbumsList = ({albums}) => {
    return (
        <div>
            {
              albums.map(album =>
              <div key={album.id}>
                  <h1>{album.userId}</h1>
                  <h3>{album.title}</h3>
              </div>
              )
            }
        </div>
    )
}