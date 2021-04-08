import React from 'react';
import './Items.css';

export const Items = ({items, selectedItem}) => {
    return (
        <div>
            {items.map(item =>
                <button className='items'
                    style={{
                        background: selectedItem === item.title
                            ? 'red'
                            : 'white'
                    }}
                    key={item.title}
                    onClick={item.click}>
                    {item.title}
                </button>)}
        </div>
    )
}