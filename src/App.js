import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./Components/CreateEvent/CreateEvent";
import EditEvent from "./Components/EditEvent/EditEvent";
import Home from "./Components/Home/Home";
import ViewEvent from "./Components/ViewEvent/ViewEvent";

function App() {
  return (
    <div className="App h-screen">
      <div className="px-8 py-8 md:px-20 md:py-10">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<CreateEvent />}></Route>
          <Route path="/event" element={<ViewEvent />}></Route>
          <Route path="/edit" element={<EditEvent />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
