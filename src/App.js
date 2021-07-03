import React, { useState } from "react";
import { render } from "react-dom";
import SimpleHeader from "./SimpleHeader";

const App = () => {
  return (
    <div>
      <SimpleHeader title="Simple To-Do List" subtitle="Written by Tosh Roberts Brockway" lists={["first","second"]}/>
    </div>
  )

}
  
  render(<App />, document.getElementById("root"));