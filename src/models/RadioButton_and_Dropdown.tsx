import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

function RadioButton_and_Dropdown() {
  type Gender = "Male" | "Female" | "Others";
  type District = "Moulvibazar" | "Sylhet" | "Dhaka" | "Khulna" | "Habiganj";

  const [gender, setGender] = useState<Gender>("Male");
  const [district, setDistrict] = useState<District>("Moulvibazar")
  const navigate = useNavigate();

  const genderChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (value === "Male" || value === "Female" || value === "Others") {
      setGender(value);
    }
  };


    const districtChange = (event: ChangeEvent<HTMLSelectElement>): void => {
      const { value } = event.target;
      if (
        value === "Moulvibazar" ||
        value === "Sylhet" ||
        value === "Dhaka" ||
        value === "Khulna" ||
        value === "Habiganj"
      ) {
        setDistrict(value);
      }
    };

  return (
    <div>
      <h1>Handle Radio Button and Dropdown</h1>
      <button onClick={() => navigate("/")}>Home</button>

      <div>
        <h4>Select Gender</h4>
        <div>
          <input
            type="radio"
            onChange={genderChange}
            name="gender"
            value="Male"
            checked={gender === "Male"}
            id="male"
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="radio"
            onChange={genderChange}
            name="gender"
            value="Female"
            checked={gender === "Female"}
            id="female"
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="radio"
            onChange={genderChange}
            name="gender"
            value="Others"
            checked={gender === "Others"}
            id="others"
          />
          <label htmlFor="others">Others</label>
        </div>
        <h4>You Select {gender}</h4>
      </div>

      <br />
      <br />
      <div>
        <h2>Select District</h2>
        <select
          onChange={districtChange}
          defaultValue={"Moulvibazar"}
        >
          <option value={"Moulvibazar"}>Moulvibazar</option>
          <option value={"Sylhet"}>Sylhet</option>
          <option value={"Dhaka"}>Dhaka</option>
          <option value={"Khulna"}>Khulna</option>
          <option value={"Habiganj"}>Habiganj</option>
        </select>
        <h4>Select District: {district}</h4>
      </div>
    </div>
  );
}

export default RadioButton_and_Dropdown;
