import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/navbar/Navbar";
import Tabbar from "./Components/tabbar/Tabbar";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-body">
        <Navbar />
        <Tabbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
