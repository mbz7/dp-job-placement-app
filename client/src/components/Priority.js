import React, { useState } from "react";

function Priority({ urgency }) {
  const [style, setStyle] = useState(() => {
    if (urgency === "High") {
      return "text-danger";
    } else if (urgency === "Medium") {
      return "text-warning";
    } else if (urgency === "Low") {
      return "text-success";
    }
  });
  //   const handleStyle = (urgency) => {

  //   };
  return (
    <>
      <p className={style}>{urgency}</p>
    </>
  );
  //
}

export default Priority;
