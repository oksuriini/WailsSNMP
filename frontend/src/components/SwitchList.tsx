import { useState } from "react";
import ListSwitch from "./ListSwitches";

function SwitchList() {
  const [switchList, setSwitchList] = useState<
    { name: string; ip: string; community: string; id: number }[]
  >([]);
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [community, setCommunity] = useState("");

  let nextId = 0;

  const addSwitch = () => {
    console.log(`${name} -- ${ip} -- ${community}`);

    setSwitchList([
      ...switchList,
      { name: name, ip: ip, community: community, id: nextId++ },
    ]);

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
    console.log(switchList);
  }

  function handleSave() {
    const element = document.createElement("a");
    element.download = "rename-this.json";
    const data = switchList;
    const file = new Blob([JSON.stringify(data)], { type: "application/json" });

    element.href = URL.createObjectURL(file);
    element.addEventListener("click", (event) => {
      setTimeout(() => URL.revokeObjectURL(element.href), 30 * 1000);
    });
    console.log("Tallennettu");
    element.click();
  }

  function removeEntry(index: number) {
    let newArr = [];
    for (let i = 0; i < switchList.length; i++) {
      if (index !== i) {
        newArr.push(switchList[i]);
      }
    }
    console.log(newArr);
    setSwitchList(newArr);
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
            value={name}
            placeholder="Switch Name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            name="ip"
            value={ip}
            placeholder="Switch IP"
            onChange={(event) => setIp(event.target.value)}
          />
          <input
            name="community"
            value={community}
            placeholder="Community String"
            onChange={(event) => setCommunity(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSave}>Save</button>
      <input id="upload" type="file" />
      <ListSwitch switches={switchList} removeSwitch={removeEntry} />
    </div>
  );
}

export default SwitchList;
