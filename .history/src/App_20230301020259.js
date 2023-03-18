import "./App.css";
import Popup from "./popup";

function App() {
  return (
    <div className="App w-[500px]">
      <div className="logoBox">
        <img
          className="img"
          src="https://i.ibb.co/zHFSZJm/128t.png"
          alt="4T Logo"
        />
        <div className="titleBox">
          <h1 className="logoText">Ask</h1>
          <h1 className="logoText">Alex</h1>
        </div>
      </div>
      <header className="App-header bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3] w-[25rem]">
        <div className="bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3]  w-[100%] flex justify-center items-center"></div>
        <Popup />
      </header>
    </div>
  );
}

export default App;
