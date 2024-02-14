import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import SwitchList from "./components/SwitchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "switch",
    element: <SwitchList />,
  },
]);

function App() {
  const [fields, setFields] = useState([{ name: "", ip: "", community: "" }]);
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [community, setCommunity] = useState("");

  const addSwitch = () => {
    fields.push({ name: name, ip: ip, community: community });
    setName("");
    setIp("");
    setCommunity("");
  };

  function handleSubmit(event: any) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(fields);
  }

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

  function removeEntry(index: number) {
    setFields(fields.slice(index));
  }

  function handleLoad() {}

  return (
    <div id="App">
      <Title />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
