import React, { useState } from 'react';

// Simple header component
// built 7/1/21

const SimpleHeader = (props) => {
    const [listItems, setListItems] = useState([]);
    setListItems(props.lists);
    return (
        <div id="header">
            <h1 id="title">{String(props.title)}</h1>
            <h2 id="subtitle">{String(props.subtitle)}</h2>
            {
                listItems.map(
                    listItem => {
                        return (
                            <a href={listItem} key={listItem.id}>{listItem}</a>
                        )
                        
                    }
                )
            }
        </div>
    )
}

export default SimpleHeader;