import React, { useState } from "react";

// Simple header component
// built 7/1/21

const TestMap = (props) => {
  const [listItems, setListItems] = useState(props.lists);
  return (
    <div id="header">
      {listItems.map((listItem) => {
        return <h1 key={listItem.id}>{listItem}</h1>;
      })}
    </div>
  );
};

export default TestMap;
