import * as React from "react";
import * as ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import App from "./App";

(async () => {
  console.log("render");
  ReactDOM.render(
    // <Provider store={{}}>
      <App />
    // </Provider>
    ,
    document.getElementById("root") as HTMLElement
  );
})();

console.log("end of page");
