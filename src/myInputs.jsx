import { useContext } from "react";
import { inputContext } from "./context/loanFormContext";
export default function MyInput() {
  const myContext = useContext(inputContext);
  console.log(myContext);

  return (
    <>
      <label>{myContext.labelTitle} </label>
      <input
        value={myContext.inputValue}
        onChange={(event) => {
          myContext.handleChange(event.target.value);
        }}
      />
    </>
  );
}
