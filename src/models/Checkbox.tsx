import React, { useState } from "react";

function Checkbox() {
  const [skills, setskills] = useState<string[]>([]);
  const handleSkills = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setskills([...skills, value]);
    } else {
      setskills([...skills.filter((item) => item != value)]);
    }
  };
  return (
    <div>
      <h1>Select your skills...</h1>
      <div style={{ margin: "20px" }}>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="dotnet"
            value={"dotnet"}
          />
          <label htmlFor="dotnet">.Net</label>
        </div>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="java"
            value={"java"}
          />
          <label htmlFor="java">Java</label>
        </div>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="csharp"
            value={"csharp"}
          />
          <label htmlFor="csharp">C#</label>
        </div>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="cplusplus"
            value={"cplusplus"}
          />
          <label htmlFor="cplusplus">C++</label>
        </div>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="javascript"
            value={"javascript"}
          />
          <label htmlFor="javascript">Javascript</label>
        </div>
        <div>
          <input
            onChange={handleSkills}
            type="checkbox"
            id="typescript"
            value={"typescript"}
          />
          <label htmlFor="typescript">Typescript</label>
        </div>
      </div>
      <p>
        Selected Skills: <b> {skills.join(", ")} </b>
      </p>
    </div>
  );
}

export default Checkbox;
