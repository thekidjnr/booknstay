import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HotelLists from "./pages/hotelLists/HotelLists";

function App() {
  return (
    <div className="App text-3xl">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/hotels" exact element={<HotelLists />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
