import { useState } from "react";

function SwitchList() {
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
      <p>
        Type in switch name, ip address and community string and then press
        submit
      </p>
      <button onClick={addSwitch}>Add Switch</button>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <label>IP</label>
        <label>Community</label>
        <div>
          <input
            name="name"
            placeholder="Switch Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            name="ip"
            placeholder="Switch IP"
            onChange={(event) => setIp(event.target.value)}
          />
          <input
            name="community"
            placeholder="Community String"
            onChange={(event) => setCommunity(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSave}>Save</button>
      <input id="upload" type="file" />
      {fields.map((input, index) => {
        return (
          <div>
            <p>{fields[index].name}</p>
            <button onClick={() => removeEntry(index)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default SwitchList;
