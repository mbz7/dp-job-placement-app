import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/priority.css";

function Priority({ urgency }) {
  const [style, setStyle] = useState(() => {
    if (urgency === "High") {
      return "priority-red";
    } else if (urgency === "Medium") {
      return "priority-medium";
    } else if (urgency === "Low") {
      return "priority-low";
    }
  });

  return (
    <>
      <div className={`p-2 w-75 opacity-75 priority-btn ${style}`}>
        {urgency}
      </div>
    </>
  );
  //

  //
}

export default Priority;
