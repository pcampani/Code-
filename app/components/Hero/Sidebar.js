import React from "react";

import Card from "./Card";

function Sidebar(props) {
  return (
    <div>
      <h2>Tech Stack</h2>
      {props.icons.map((icon, i) => (
        <Card key={i} {...icon} />
      ))}
    </div>
  );
}

export default Sidebar;
