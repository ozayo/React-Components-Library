import React from "react";
import Badge from "../components/Badge";
import Code from "../components/Code";
import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheck,
  FaExclamationCircle,
} from "react-icons/fa";

const BadgePage = () => {
  return (
    <div>
      <h1>React Badge Component</h1>
      <p>
        <strong>props:</strong> size, color, icon, children{" "}
      </p>

      <div className="my-6">
        <h2>Default badges</h2>
        <p>
          color="fail", color="success", color="warning", default color is blue.
        </p>
        <div className="flex gap-2 items-end flex-wrap my-4">
          <Badge>Default</Badge>
          <Badge color="fail">Failure</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
        </div>
        <h3>usage</h3>
        <Code language="javascript">
          {`
import Badge from "./components/Badge";

<Badge>Badge</Badge>
<Badge color="fail">Failure</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
        `}
        </Code>
      </div>

      <div className="my-6">
        <h2>Badges size</h2>
        <p>
          size="small", size="base"(default), size="large" size="justicon"
          (check badges with icon)
        </p>
        <div className="flex gap-2 items-end flex-wrap my-4">
          <Badge size="small">Small</Badge>
          <Badge size="base">Base</Badge>
          <Badge size="large">Large</Badge>
        </div>
        <h3>usage</h3>
        <Code language="javascript">
          {`

<Badge size="small">Small</Badge>
<Badge size="base">Base</Badge>
<Badge size="large">Large</Badge>
        `}
        </Code>
      </div>

      <div className="my-6">
        <h2>Badges with icon</h2>
        <p>
          You can use icon inside the badge. We use React Icon for icons. You
          can see example usages below.
        </p>
        <p>
          Check{" "}
          <a className="icon" href="https://react-icons.github.io/react-icons/">
            {" "}
            React Icon
          </a>{" "}
          to see all icons and how you can use them.
        </p>
        <div className="flex gap-2 items-end flex-wrap my-4">
          <Badge icon={<FaInfoCircle />}>Icon</Badge>
          <Badge icon={<FaExclamationCircle />} color="fail">
            Failure
          </Badge>
          <Badge icon={<FaCheck />} color="success">
            Success
          </Badge>
          <Badge icon={<FaExclamationTriangle />} color="warning">
            Warning
          </Badge>
          <Badge
            icon={<FaExclamationTriangle />}
            color="fail"
            size="justicon"
          ></Badge>
        </div>
        <h3>usage</h3>
        <Code language="javascript">
          {`
import Badge from "./components/Badge";
import { FaExclamationTriangle, FaInfoCircle, FaCheck, FaExclamationCircle} from "react-icons/fa";

<Badge icon={<FaInfoCircle />}>Icon</Badge>
<Badge icon={<FaExclamationCircle />} color="fail">Failure</Badge>
<Badge icon={<FaCheck />} color="success">Success</Badge>
<Badge icon={<FaExclamationTriangle />} color="warning">Warning</Badge>
<Badge icon={<FaExclamationTriangle />} color="fail" size="justicon"></Badge>
        `}
        </Code>
      </div>
    </div>
  );
};

export default BadgePage;
