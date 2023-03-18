import "./App.css";
import Popup from "./popup";

function App() {
  return (
    <div className="App w-[500px]">
      <div>
        <div>
          <h1>a</h1>
        </div>
        <h1>sk alex</h1>
      </div>
      <header className="App-header bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3] w-[25rem]">
        <div className="bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3]  w-[100%] flex justify-center items-center"></div>
        <Popup />
      </header>
    </div>
  );
}

export default App;
