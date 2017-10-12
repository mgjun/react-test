import React from "react";
import { render } from "react-dom";
import MyComponent from "./components/index";

var myElement = <MyComponent />;

render(
    myElement,
    document.body
)