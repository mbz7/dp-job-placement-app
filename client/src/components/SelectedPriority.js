import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function SelectedPriority({ job }) {
  let urgency = job.urgency;

  const [style, setStyle] = useState(() => {
    if (urgency === "High") {
      return "danger";
    } else if (urgency === "Medium") {
      return "warning";
    } else if (urgency === "Low") {
      return "success";
    }
  });

  console.log(style);
  //   const handleStyle = (urgency) => {

  //   };
  return (
    <>
      <Button variant={style}>Priority: {urgency}</Button>
    </>
  );
  //

  //
}

export default SelectedPriority;
