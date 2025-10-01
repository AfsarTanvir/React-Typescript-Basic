import { useState, type ChangeEvent, useEffect } from "react";

function InputField() {
  const [val, setVal] = useState<string>("Enter a Name to see magic.");
  function clear() {
    setVal("");
  }
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [fullName, setFullName] = useState("");
  const [capName, setcapName] = useState("");
  function clearAll() {
    setFirstName("");
    setSecondName("");
    setFullName("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event);

    const capitalize = (name: string): string => {
      if (!name) return ""; 
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const capitalizedFirstName = capitalize(firstName);
    const capitalizedSecondName = capitalize(secondName);

    setcapName(capitalizedFirstName + " " + capitalizedSecondName);
  }

  useEffect(() => {
    setFullName(firstName + " " + secondName);
  }, [firstName, secondName]);

  return (
    <>
      <h1>Input Field</h1>
      <div>
        <input
          value={val}
          type="text"
          onChange={(event) => setVal(event.target.value)}
          placeholder="Enter User Name"
        />
        <h1>Output: {val}</h1>
        <button type="button" className="btn btn-outline-info" onClick={clear}>
          Clear
        </button>
      </div>
      <br />
      <br />
      <div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Enter Your First Name
          </label>
          <input
            value={firstName}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(event) => {
              setFirstName(event.target.value);
              handleChange(event);
            }}
            placeholder="Example input placeholder"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Enter Your Second Name
          </label>
          <input
            value={secondName}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            onChange={(event) => {
              setSecondName(event.target.value);
              handleChange(event);
            }}
            placeholder="Another input placeholder"
          />
          <h2>Full Name: {fullName}</h2>
          <h2>First Name: {firstName}</h2>
          <h2>Second Name: {secondName}</h2>
          <h2>Cap Name: {capName}</h2>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={clearAll}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default InputField;
