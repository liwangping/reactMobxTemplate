import React from "react";
import ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import "index.scss";
let HelloWorld = () => {
    return <div>
        <Hello />
    </div>;
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);