import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  user: string;
}

const HelloWorld = (props: Props) => {
  
  return <h1>{props.user} says hello world from React!</h1>;
};

ReactDOM.render(<HelloWorld user="John" />, document.getElementById("root"));
