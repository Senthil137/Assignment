import React from "react";
import complete from "../../assets/images/complete.png";
import noload from "../../assets/images/no-load.png";
import partial from "../../assets/images/partial-load.png";
import quality from "../../assets/images/quality-alert.png";

const StatusComponent = props => {
  return (
    <div>
      <p>
        <span>Complete </span>
        <img width={50} height={50} alt={"Complete"} src={complete} />
        <span>Quality Alert</span>
        <img width={50} height={50} alt={" Quality Alert"} src={quality} />
      </p>
      <p />
      <p>
        <span>Partial Load</span>
        <img width={50} height={50} alt={"Partial Load"} src={partial} />
        <span>No Load </span>
        <img width={50} height={50} alt={"No Load"} src={noload} />
      </p>
      <p />
    </div>
  );
};

export default StatusComponent;
