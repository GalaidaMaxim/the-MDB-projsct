import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { Main } from "./pages/Main";

function App() {
  useEffect(() => {
    (async () => {})();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
