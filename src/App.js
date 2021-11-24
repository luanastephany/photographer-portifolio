import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./screens/Gallery";
import Home from "./screens/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
