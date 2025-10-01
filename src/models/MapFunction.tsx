import User01 from "./User01";

function MapFunction() {
    type User = {
      Id: number;
      Name: string;
      Age: number;
      Email: string;
      Phone: string;
      Skills: string[];
    };
    const dummyData: User[] = [
      {
        Id: 1,
        Name: "Numin",
        Age: 24,
        Email: "numin@gmail.com",
        Phone: "+8801712345678",
        Skills: ["Javascript", "Typescript"],
      },
      {
        Id: 2,
        Name: "Afsar",
        Age: 24,
        Email: "afsar@gmail.com",
        Phone: "+8801712345678",
        Skills: ["Javascript", "Typescript"],
      },
      {
        Id: 3,
        Name: "Rajon",
        Age: 24,
        Email: "rajon@gmail.com",
        Phone: "+8801712345678",
        Skills: ["Javascript", "Typescript"],
      },
      {
        Id: 4,
        Name: "No one",
        Age: 0,
        Email: "",
        Phone: "+8801712345678",
        Skills: [],
      },
    ];
  return (
    <>
      <h1>Map Function - Loop in TSX</h1>
      <div>
        <h2>Table 01</h2>
        <table className="table table-info table-striped table-hover">
          <thead>
            <tr>
              <th> Id </th>
              <th> Name </th>
              <th> Age </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Skills </th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((user) => (
              <tr key={user.Id}>
                <td> {user.Id} </td>
                <td> {user.Name} </td>
                <td> {user.Age} </td>
                <td> {user.Email} </td>
                <td> {user.Phone} </td>
                <td> {user.Skills.join(", ")} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr></hr>
        <hr></hr>
        <h2>Table 02</h2>
        {dummyData.map((user) => (
          <div key={user.Id}>
            <User01 data={user} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MapFunction