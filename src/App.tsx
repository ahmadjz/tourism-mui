import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchAppBar from "./components/AppBar";
import Tour from "./pages/Tour";

function App() {
  return (
    <HashRouter>
      <SearchAppBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
