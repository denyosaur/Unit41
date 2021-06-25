import { BrowserRouter } from "react-router-dom";
import './App.css';

import ColorRoute from "./components/ColorRoute"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
