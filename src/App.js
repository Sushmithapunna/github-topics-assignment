const { default: TopicsMain } = require("./components/TopicsMain");

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Github Topics App</h1>
      </header>
      <div className="app-body">
        <TopicsMain />
      </div>
    </div>
  );
}

export default App;
