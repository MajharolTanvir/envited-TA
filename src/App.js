import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import Home from "./Components/Home/Home";
import ViewEvent from "./Components/ViewEvent/ViewEvent";

function App() {
  return (
    <div className="mx-8 my-8 md:mx-20 md:my-10">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateEvent />}></Route>
        <Route path="/view" element={<ViewEvent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
