import React, { useState, useEffect } from "react";
import "../css/priority.css";

function Priority({ urgency }) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    const changeStyle = (urgency) => {
      if (urgency === "High") {
        setStyle("priority-high");
      } else if (urgency === "Medium") {
        setStyle("priority-medium");
      } else if (urgency === "Low") {
        setStyle("priority-low");
      }
    };
    changeStyle(urgency);
  }, [urgency]);

  return (
    <>
      <div className={`${style} mx-auto`}>
        <p className="text-center my-auto">{urgency}</p>
      </div>
    </>
  );
}

export default Priority;
