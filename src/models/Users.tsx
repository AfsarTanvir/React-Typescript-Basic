import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import { Link, Outlet, useParams } from "react-router-dom";

// ✅ 1️⃣ Define User type
type User<T> = {
  id: number;
  name: T;
};

// ✅ 2️⃣ Define Context Type
type UserContextType<T> = {
  userList: User<T>[];
  selectedUser: React.MutableRefObject<T | undefined>;
  //   setSelectedUser: React.Dispatch<React.SetStateAction<User<T> | null>>;
};

// ✅ 3️⃣ Create Context
const UserContext = createContext<UserContextType<string> | undefined>(
  undefined
);

// ✅ 4️⃣ Main Component (acts as both provider + view)
function Users() {

    // const [selectedUser, setSelectedUser] = useState<User<string> | null>(null);
    const selectedUser = useRef<string | undefined>(undefined);
  const [userList] = useState<User<string>[]>([
    { id: 0, name: "Afsar" },
    { id: 1, name: "Numin" },
    { id: 2, name: "Rajon" },
    { id: 3, name: "Ringku" },
    { id: 4, name: "Adil" },
    { id: 5, name: "Anamul" },
    { id: 6, name: "Asad" },
    { id: 7, name: "Nahim" },
  ]);   

  console.log("parents");


  return (
    <UserContext.Provider value={{ userList, selectedUser }}>
      <div className="heading-div">
        <h1 className="heading">Users List</h1>
      </div>
      <Card className="cardforuniverse">
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              <Link to={String(user.id + 1)}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </Card>
      <Outlet />
    </UserContext.Provider>
  );
}

// ✅ 5️⃣ Child (still same file, uses Context + URL)
function UserDetails() {
  const { userId } = useParams();
  const context = useContext(UserContext);

  if (!context)
    throw new Error("UserDetails must be used within Users component");

  const { userList, selectedUser } = context;

  const user = userList.find((u) => u.id + 1 === Number(userId)) || null;

  // Update context when user changes
  console.log(user, "user01");
  useEffect(() => {
    // setSelectedUser(user);
    console.log(user, "user02");
    selectedUser.current = user?.name;
  }, [user]);

  if (!user) return <h3 style={{ color: "red" }}>⚠️ User not found</h3>;
  console.log(selectedUser.current);
  console.log("child");
  return (
    <>
      <Card className="cardforuniverse" style={{ marginTop: "20px" }}>
        <h2>User Details</h2>
        <h3>User ID: {user.id + 1}</h3>
        <h3>User Name: {user.name}</h3>
      </Card>
    </>
  );
}

export { Users, UserDetails };
