import { useState } from 'react'
import { Card } from 'react-bootstrap';

function UpdatingObjectsInState() {

    const [obj, setObj] = useState({
      Name: "Afsar Tanvir",
      Age: 24,
      Experiance: [
        {
          Organization: "Learnathon",
          Duration: "4 month",
          Stack: ".Net",
        },
        {
          Organization: "Appifylab",
          Duration: "1 month",
          Stack: "React",
        },
      ],
      Address: {
        Parmanent: "Moulvibazar",
        Current: "Sylhet",
      },
      Skills: ["Javascript", "Typescript", "C#"],
    });

    const handleName = (Name: string) => {
      obj.Name = Name;
      setObj({ ...obj });
    };

    const handleCity = (city: string) => {
        obj.Address.Current = city;
        setObj({ ...obj, Address: { ...obj.Address, Current: city } });
    };

    const handleAddSkills = (skill: string) => {
      setObj({ ...obj, Skills: [...obj.Skills, skill] });
    };

    const handleAddExperiance = (experiance: {Organization: string, Duration: string, Stack: string}) => {
      setObj({ ...obj, Experiance: [...obj.Experiance, experiance] });
    }
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">Objects Updating</h1>
      </div>
      <Card style={{ width: "20rem", padding: "10px", margin: "10px" }}>
        <h3>Name: {obj.Name}</h3>
        <h3>Age: {obj.Age}</h3>
        <h3>
          Address: {obj.Address.Parmanent}, {obj.Address.Current}
        </h3>
        <h3>Skills: {obj.Skills.join(", ")}</h3>
        <h3>Experiance:</h3>
        <ul>
          {obj.Experiance.map((exp, index) => (
            <li key={index}>
              {exp.Organization} - {exp.Duration} - {exp.Stack}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Change Name"
          onChange={(e) => handleName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Change City"
          onChange={(e) => handleCity(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Add Skill"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value) {
              handleAddSkills(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Add Experiance in format Org,Duration,Stack"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value) {
              const [Organization, Duration, Stack] =
                e.currentTarget.value.split(",");
              if (Organization && Duration && Stack) {
                handleAddExperiance({ Organization, Duration, Stack });
                e.currentTarget.value = "";
              }
            }
          }}
        />
        <br />
        <br />
      </Card>
    </>
  );
}

export default UpdatingObjectsInState