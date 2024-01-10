import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ language, showLineNumbers, children }) => {
  const codeString = children.trim();

  return (
    <SyntaxHighlighter
      language={language}
      style={docco}
      showLineNumbers={showLineNumbers}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Code;
