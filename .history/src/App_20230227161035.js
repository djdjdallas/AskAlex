import "./App.css";
import Popup from "./popup";
import "./index.css";
function App() {
  return (
    <div className="App w-[500px]">
      <header className="App-header bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3] w-[25rem]">
        <div className="bg-gradient-to-r from-[#5E50A0] via-[#EDF4EF] to-[#C4C2F3]  w-[100%] flex justify-center items-center"></div>
        <Popup />
      </header>
    </div>
  );
}

export default App;
