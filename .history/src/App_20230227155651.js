import "./App.css";
import Popup from "./popup";
function App() {
  return (
    <div className="App w-[500px]">
      <header className="App-header bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3] w-[25rem]">
        <div className="bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3]  w-[100%] flex justify-center items-center">
          <img
            src={require("./4t-logo.png")}
            alt="logo"
            className="w-80 h-32 rounded-md"
          />
        </div>
        <Popup />
      </header>
    </div>
  );
}

export default App;
