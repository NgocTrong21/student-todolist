import { Routes, Route } from "react-router-dom";
import "./App.css";
import Get from "./components/Get";
import Add from "./components/Add";
import Update from "./components/Update";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Get />} />
      <Route path="/add" element={<Add />} />
      <Route path="/student/:id/edit" element={<Update />} />
    </Routes>
  );
}

export default App;
