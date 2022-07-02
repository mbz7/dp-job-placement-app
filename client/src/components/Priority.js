import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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

  // console.log(style);
  //   const handleStyle = (urgency) => {

  //   };
  return (
    <>
      <Button size="sm" variant={style}>
        {urgency}
      </Button>
    </>
  );
  //

  //
}

export default Priority;
