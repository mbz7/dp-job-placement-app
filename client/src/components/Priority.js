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

  return (
    <>
      <Button size="md" variant={style} className="p-2 w-75 shadow-sm">
        {urgency}
      </Button>
    </>
  );
  //

  //
}

export default Priority;
