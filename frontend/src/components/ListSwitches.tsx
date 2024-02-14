function ListSwitch({
  switches,
  removeSwitch,
}: {
  switches: any;
  removeSwitch: Function;
}) {
  return (
    <div>
      {switches.map((element: any, index: any) => (
        <div>
          <p>
            {element.name} -- {element.ip}
          </p>
          <button onClick={() => removeSwitch(index)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default ListSwitch;
