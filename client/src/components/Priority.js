import React, { useState } from "react";
import Badge from "react-bootstrap/badge";

function Priority({ urgency }) {
  const [style, setStyle] = useState(() => {
    if (urgency === "High") {
      return "danger";
    } else if (urgency === "Medium") {
      return "warning";
    } else if (urgency === "Low") {
      return "success";
    }
  });
  //   const handleStyle = (urgency) => {

  //   };
  return (
    <>
      <Badge className="p-2" bg={style}>
        Priority: {urgency}
      </Badge>
    </>
  );
  //
}

export default Priority;
