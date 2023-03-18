import "./App.css";

function App() {
  function test() {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      // eslint-disable-next-line no-undef
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: () => alert("Hello from the extension!"),
      });
    });
  }

  return (
    <div style={{ width: "500px", height: "1000px" }} className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
