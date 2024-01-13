import React from "react";
import Alert from "../components/Alert";
import Code from "../components/Code";
import { FaAngellist } from "react-icons/fa";

const AlertPage = () => {
  return (
    <div>
      <h1>React Alert Component</h1>
      <p>
        <strong>props:</strong> color, noicon, noradius, dismissible, children.
      </p>
      <div className="my-6">
        <h2>Default Alerts</h2>
        <Alert>Default alert</Alert>
        <Alert color="success">Success alert</Alert>
        <Alert color="fail">Fail alert</Alert>
        <Alert color="warning">Warning alert</Alert>
        <Alert noicon>Without icon alert</Alert>
        <div className="my-2">
          <h3>usage</h3>
          <Code language="javascript">
            {`
import Alert from "./components/Alert";

<Alert>Default alert</Alert>
<Alert color="success">Success alert</Alert>
<Alert color="fail">Fail alert</Alert>
<Alert color="warning">Warning alert</Alert>
        `}
          </Code>
        </div>
      </div>

      <div className="my-6">
        <h2>Border radius</h2>
        <Alert radius="rs">Radius rs. Default radius</Alert>
        <Alert radius="rm">Radius rm, medium radius</Alert>
        <Alert radius="rf">Radius rf, full radius</Alert>
        <Alert noradius>Without radius</Alert>
        <div className="my-2">
          <h3>usage</h3>
          <Code language="javascript">
            {`
<Alert radius="rs">Radius rs. Default radius</Alert>
<Alert radius="rm">Radius rm, medium radius</Alert>
<Alert radius="rf">Radius rf, full radius</Alert>
<Alert noradius>Without radius</Alert>
        `}
          </Code>
        </div>
      </div>

      <div className="my-6">
        <h2>Dismissible & custom alerts</h2>
        <Alert dismissible>
          Dismissible alert. You can remove (dismiss) this alert.
        </Alert>
        <Alert noicon dismissible color="bg-violet-700 text-white">
          <div className="flex items-center gap-1">
            <FaAngellist /> <strong>Custom Alert Test</strong>
          </div>
          <p className="font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            magni autem expedita quis, voluptas exercitationem tenetur sit nihil
            fugiat, cupiditate sint, animi dolorum nobis labore assumenda.
            Dolorem tempora similique magni.
          </p>
        </Alert>
        <div className="my-2">
          <h3>usage</h3>
          <Code language="javascript">
            {`

<Alert dismissible>Dismissible alert. You can remove (dismiss) this alert.</Alert>

<Alert noicon dismissible color="bg-violet-700 text-white">
  <div className="flex items-center gap-1">
    <FaAngellist /> <strong>Custom Alert Test</strong>
  </div>
  <p className="font-normal">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
    magni autem expedita quis, voluptas exercitationem tenetur sit nihil
    fugiat, cupiditate sint, animi dolorum nobis labore assumenda.
    Dolorem tempora similique magni.
  </p>
</Alert>
        `}
          </Code>
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
