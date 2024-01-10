import Button from "../Button";
import Code from "../Code";

function ButtonSample() {
  return (
    <div>
      <h1>Button Component</h1>
      <p>props: size, color, disabled</p>

      <h2>Default & Disabled Button</h2>
      <div className="flex gap-2 items-end flex-wrap">
        <Button>Default</Button>
        <Button disabled>Disabled</Button>
      </div>
      <h3>Basic usage</h3>
      <Code language="javascript" showLineNumbers>
        {`
import Button from "./Button";

function App() {
  return (
    <Button>Default</Button>
    <Button disabled>Disabled</Button>
 );
}
        `}
      </Code>

      <h2>Button Colors</h2>
      <div className="flex gap-2 items-end flex-wrap">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="accent">Accent</Button>
        <Button color="bg-emerald-800 hover:bg-emerald-900 text-white">
          With tailwind class
        </Button>
      </div>

      <div>
        <h3>Using</h3>
        <Code language="htmlbars" showLineNumbers>
          {`
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="accent">Accent</Button>
<Button color="bg-emerald-800 hover:bg-emerald-900 text-white">With tailwind class</Button>   //Use Tailwind Css class direct in color attribute
        `}
        </Code>
      </div>
      <div>
        <h2>Buton Sizes</h2>
        <p>Button size: small, base, large</p>
        <div className="flex gap-2 items-end flex-wrap">
          <Button size="small">Small</Button>
          <Button size="base">Base</Button>
          <Button size="large">Large</Button>
        </div>
        <Code language="htmlbars" showLineNumbers>
          {`
<Button size="small">Small</Button>
<Button size="base">Base</Button>
<Button size="large">Large</Button>
        `}
        </Code>
      </div>
      <div>
        <h2>Buton Radius</h2>
        <p>Button radius: rsm, rm, rf. Default no-radius</p>
        <div className="flex gap-2 items-end flex-wrap">
          <Button radius="rsm">Radius small</Button>
          <Button radius="rm">Radius medium</Button>
          <Button radius="rf">Radius full</Button>
        </div>
        <Code language="htmlbars" showLineNumbers>
          {`
<Button radius="rsm">Radius small</Button>
<Button radius="rm">Radius medium</Button>
<Button radius="rf">Radius full</Button>
        `}
        </Code>
      </div>
    </div>
  );
}

export default ButtonSample;
