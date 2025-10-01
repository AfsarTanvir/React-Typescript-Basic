type User = {
  Id: number;
  Name: string;
  Age: number;
  Email: string;
  Phone: string;
  Skills: string[];
};

type UserProps = {
  data: User;
};

const User01 = ({ data }: UserProps) => {
  return (
    <div
      style={{
        border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "10px",
      }}
    >
      <h3>
        Name: <span style={{ color: "yellowgreen" }}>{data.Name}</span>
      </h3>
      <p>Age: {data.Age}</p>
      <p>Email: {data.Email}</p>
    </div>
  );
};

export default User01;