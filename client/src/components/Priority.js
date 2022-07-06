import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/priority.css";

function Priority({ urgency }) {
  const [style, setStyle] = useState(() => {
    if (urgency === "High") {
      return "priority-high";
    } else if (urgency === "Medium") {
      return "priority-medium";
    } else if (urgency === "Low") {
      return "priority-low";
    }
  });

  console.log(style);

  return (
    <>
      <div className={`${style} mx-auto`}>
        <p className="text-center my-auto">{urgency}</p>
      </div>
    </>
  );
  //

  //
}

export default Priority;
