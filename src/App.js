import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App min-h-screen">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
