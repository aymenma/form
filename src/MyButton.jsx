import { useState } from "react";

let name = "Ahmed";
export default function MyButton() {
  console.log("render");
  const [name, setName] = useState("Ahmed");
  function buttonClicked() {
    if (name == "yarob") {
      setName("Ahmed");
    } else {
      setName("yarob");
    }
  }
  return (
    <div>
      <button onClick={buttonClicked}>click me</button>
      <h1>{name}</h1>
    </div>
  );
}
