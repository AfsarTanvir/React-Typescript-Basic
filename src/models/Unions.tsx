type Dog = {
  PetTypes: "Dog";
  sound(): string;
};

type Cat = {
  PetTypes: "Cat";
  sound(): string;
};

type Cow = {
  PetTypes: "Cow";
  sound(): string;
};

type Animal = Dog | Cat | Cow;

type Color = {
    color: 'Black' | 'White' | 'Brown';
}

const ani: Animal & Color = {
  PetTypes: "Cat",
  sound() {
    return "Meaw, Meaw, Meaw";
  },
  color: "Black",
};

const cow: Animal & Color = {
  PetTypes: "Cow",
  color: "Brown",
  sound() {
    return "Hambaaa";
  },
};

interface Goat {
  PetTypes: 'Goat',
  eat: "Grass",
  sound(): string,
}

interface Tiger {
  PetTypes: 'Tiger',
  eat: 'Meat',
  sound(): string,
}

type Animal02 = (Goat | Tiger) & Color;
const tiger: Animal02 = {
  PetTypes: "Tiger",
  eat: "Meat",
  sound() {
    return "Roar";
  },
  color: "Brown",
};

interface Gender {
  gender: 'Male' | 'Female'
}

const goat: Gender & (Goat | Tiger) & Color = {
  PetTypes: "Goat",
  eat: "Grass",
  sound() {
    return "Meaa";
  },
  gender: "Male",
  color: 'White'
};

function Unions() {
  return (
    <>
      <h1>Unions</h1>
      <div className="row mx-1">
        <div
          className="card mx-1"
          style={{ width: "18rem", backgroundColor: "#a9d8d4ff" }}
        >
          <div className="card-header">Pet Types: {ani.PetTypes}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {ani.color}</li>
            <li className="list-group-item">Sound: {ani.sound()}</li>
          </ul>
        </div>
        <div
          className="card mx-1"
          style={{ width: "18rem", backgroundColor: "#a9d8d4ff" }}
        >
          <div className="card-header">Pet Types: {cow.PetTypes}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {cow.color}</li>
            <li className="list-group-item">Sound: {cow.sound()}</li>
          </ul>
        </div>
        <div
          className="card mx-1"
          style={{ width: "18rem", backgroundColor: "#a9d8d4ff" }}
        >
          <div className="card-header">Pet Types: {tiger.PetTypes}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {tiger.color}</li>
            <li className="list-group-item">Eat: {tiger.eat}</li>
            <li className="list-group-item">Sound: {tiger.sound()}</li>
          </ul>
        </div>
        <div
          className="card mx-1"
          style={{ width: "18rem", backgroundColor: "#a9d8d4ff" }}
        >
          <div className="card-header">Pet Types: {goat.PetTypes}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Color: {goat.color}</li>
            <li className="list-group-item">Gender: {goat.gender}</li>
            <li className="list-group-item">Eat: {goat.eat}</li>
            <li className="list-group-item">Sound: {goat.sound()}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Unions;
