import "./FormStyle.css";
import { useState, useContext } from "react";
import Model from "./Model.jsx";
import MyComponent from "./MyComponent.jsx";
//context
import { inputContext } from "../context/loanFormContext.jsx";
import { userContext } from "../context/userContext.jsx";
export default function LeanForm() {
  const userData = useContext(userContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: true,
    salaryRange: "",
  });
  function hundelnameChange(value) {
    setLoanInput({ ...loanInput, name: value });
  }
  function hundelPhoneChange(value) {
    setLoanInput({ ...loanInput, phoneNumber: value });
  }

  function hundelageChange(value) {
    setLoanInput({ ...loanInput, age: value });
  }

  function hundleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInput;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number is Incorrect");
    }
    setShowModel(true);
  }
  function hundelDevClick() {
    if (showModel) {
      setShowModel(false);
    }
  }
  const btnDisabled =
    loanInput.name == "" || loanInput.phoneNumber == "" || loanInput.age == "";
  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={hundelDevClick}
    >
      <form id="lean-form" className="flex" style={{ flexDirection: "column" }}>
        <h1 className="header">Requesting a Loan : {userData.userName} </h1>
        <hr />
        <inputContext.Provider
          value={{
            inputValue: loanInput.name,
            labelTitle: "name",
            handleChange: hundelnameChange,
          }}
        >
           {/* using  usecontext too pass values from app to last child  
           loanform =>MyComponent=>myinput 
           */}
          <MyComponent />
        </inputContext.Provider>

        <inputContext.Provider
          value={{
            inputValue: loanInput.phoneNumber,
            labelTitle: "phone Number",
            handleChange: hundelPhoneChange,
          }}
        >
          <MyComponent />
        </inputContext.Provider>
        <inputContext.Provider
          value={{
            inputValue: loanInput.age,
            labelTitle: "age",
            handleChange: hundelageChange,
          }}
        >
          <MyComponent />
        </inputContext.Provider>

        <label style={{ marginTop: "30px" }}>Are you an employee ?</label>
        <label type="checkbox"></label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />

        <label>Salay</label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
          }}
        >
          <option>less then 500$</option>
          <option>between 500$ and 2000 </option>
          <option>above 2000</option>
        </select>
        <button
          className={btnDisabled ? "disable" : ""}
          onClick={hundleFormSubmit}
          disabled={btnDisabled}
          id="submit-loan-btn"
        >
          Submit
        </button>
      </form>
      <Model errorMessage={errorMessage} isVisible={showModel} />
    </div>
  );
}
