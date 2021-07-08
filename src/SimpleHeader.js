import React, { useState } from "react";

// Simple header component
// built 7/1/21

const SimpleHeader = (props) => {
  //Add state for the list items
  const [listItems, setListItems] = useState(props.lists);

  //Render header
  return (
    <div id="header">
      <h1 id="title">{String(props.title)}</h1>
      <h2 id="subtitle">{String(props.subtitle)}</h2>

      {
        //Map through passed listeItems and render them next to eachother
      }
      {listItems.map((listItem) => {
        return (
          <a href={"#" + listItem} key={listItem}>
            {String(listItem)}
          </a>
        );
      })}
    </div>
  );
};

export default SimpleHeader;
