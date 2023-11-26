import { CopyBlock, dracula } from "react-code-blocks";

export default function CodeComponent(props) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      //   wrapLines={true}
      theme={dracula}
    />
  );
}
