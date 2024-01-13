import React, { useState } from "react";
import {
  FaInfoCircle,
  FaTimesCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";

const Alert = ({
  color = "primary",
  radius = "rsm",
  noicon,
  noradius,
  dismissible,
  children,
}) => {
  const [dismissed, setDismissed] = useState(false);

  let icon;

  switch (color) {
    case "fail":
      icon = <FaTimesCircle />;
      break;
    case "success":
      icon = <FaCheckCircle />;
      break;
    case "warning":
      icon = <FaExclamationTriangle />;
      break;
    default:
      icon = <FaInfoCircle />;
  }

  const handleDismiss = () => {
    setDismissed(true);
  };

  return !dismissed ? (
    <div
      className={`alert ${color} ${radius} ${
        (noicon ? "no-icon" : "", noradius ? "no-radius" : "")
      }`}
    >
      {!noicon && !noradius && <span className="alert-icon">{icon}</span>}
      <span className="alert-text">{children}</span>
      {dismissible && (
        <span className="dismiss-icon" onClick={handleDismiss}>
          <FaTimes />
        </span>
      )}
    </div>
  ) : null;
};

export default Alert;
