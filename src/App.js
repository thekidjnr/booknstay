import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App text-3xl">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
