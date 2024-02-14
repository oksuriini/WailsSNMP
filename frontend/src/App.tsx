import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import SwitchList from "./components/SwitchList";
import { SwitchListContext } from "./components/contexts/SwitchListContext";

function App() {
  const [fields, setFields] = useState([]);

  function handleSave() {
    const element = document.createElement("a");
    element.download = "rename-this.json";
    const data = fields;
    const file = new Blob([JSON.stringify(data)], { type: "application/json" });

    element.href = URL.createObjectURL(file);
    element.addEventListener("click", (event) => {
      setTimeout(() => URL.revokeObjectURL(element.href), 30 * 1000);
    });
    console.log("Tallennettu");
    element.click();
  }

  function handleLoad() {}

  return (
    <div id="App">
      <Title />
      <BrowserRouter>
        <SwitchListContext.Provider value={fields}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/switch" element={<SwitchList />} />
          </Routes>
        </SwitchListContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
