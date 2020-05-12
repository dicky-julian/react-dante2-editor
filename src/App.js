import React from "react";
import Dante from "Dante2";

console.log("wtf");

var content = null;
var test = window.localStorage.getItem(content);
content = test;
export default function App() {
  return (
      <Dante
        content={test}
        body_placeholder={"hello"}
        data_storage={{
          interval: 1000,
          save_handler: (context, content) => {
            console.log(context);
            window.localStorage.setItem("context", context);
          }
        }}
        read_only={false}
        style={{margin: '3em'}}
      />
  );
}
