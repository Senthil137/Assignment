import React from "react";
import complete from "../../assets/images/complete.png";
import partial from "../../assets/images/partial-load.png";
import quality from "../../assets/images/quality-alert.png";
import noLoad from "../../assets/images/no-load.png";
import schedule from "../../assets/images/schedule.png";

const GetStatusImage = props => {
  const { status } = props;
  var data;
  switch (status) {
    case "Complete":
      data = (
        <span>
          <img width={35} height={35} src={complete} alt={"Complete"} />
        </span>
      );
      break;
    case "PartialLoad":
      data = (
        <span>
          <img width={35} height={35} src={partial} alt={"Partial load"} />
        </span>
      );
      break;
    case "NoLoad":
      data = (
        <span>
          <img width={35} height={35} src={noLoad} alt={"No load"} />
        </span>
      );
      break;
    case "QualityAlert":
      data = (
        <span>
          <img width={35} height={35} src={quality} alt={"Quality alert"} />
        </span>
      );
      break;
    case "Schedule":
      data = (
        <span>
          <img width={35} height={35} src={schedule} alt={"Schedule"} />
        </span>
      );
    default:
      break;
  }
  return data;
};
export default GetStatusImage;
