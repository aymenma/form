import "./App.css";
import LeanForm from "./component/LeanForm";
import { userContext } from "./context/userContext";
function App() {
  return (
    <userContext.Provider
      value={{ userName: "Aymen"}}
    >
      <div className="App" style={{ marginTop: "250px;" }}>
        <LeanForm />
      </div>
    </userContext.Provider>
  );
}
export default App;





