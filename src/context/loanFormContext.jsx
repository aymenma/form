import { createContext } from "react";
export let inputContext = createContext({
  labelTitle: "",
  handleChange: null,
  inputValue: null,
});
