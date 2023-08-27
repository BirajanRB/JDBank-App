import Homepage from "./Components/Homepage/Homepage.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Services" element={"Services"} />
        <Route path="/ManagementTeam" element={"ManagementTeam"} />
        <Route path="/About" element={"About"} />
        <Route path="/CustomerSupport" element={"CustomerSupport"} />
      </Routes>
    </>
  );
}

export default App;
