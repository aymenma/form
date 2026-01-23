import { useState } from "react";
export default function MyInput() {
  const [MyInputValue, setMyInputValue] = useState("");
  function hundleInputChange(event) {
    setMyInputValue(event.target.value);
  }

  return (
    <div>
      <label>your name</label>
      <input onChange={hundleInputChange} />
    </div>
  );
}
