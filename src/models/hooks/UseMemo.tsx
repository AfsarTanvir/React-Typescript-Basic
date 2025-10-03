import { useState, useMemo, type ChangeEvent, memo } from "react";
import { Button, Card } from "react-bootstrap";

function UseMemo() {
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">Use Memo</h1>
      </div>
      <Card style={{ width: "20rem", padding: "10px", margin: "10px" }}>
        <p>1. Optimizing Expensive Calculations</p>
        <Opti />
      </Card>
      <hr />
      <Card style={{ width: "20rem", padding: "10px", margin: "10px" }}>
        <p>2. Preventing Unnecessary Re-renders</p>
        <Parent />
      </Card>
    </>
  );
}

export default memo(UseMemo);

function OptimizingExpensiveCalculations() {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  const [counter, setCounter] = useState(0);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setNumber(Number(e.target.value));
    }
  };
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <Button onClick={counterHander}>Counter ++</Button>
      <div>Counter : {counter}</div>
    </div>
  );
}
 
export const Opti = memo(OptimizingExpensiveCalculations);

function squareNum(number: number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

type Props = {
  userInfo: {
    name: string;
    age: number;
  };
  title: string;
  isActive: boolean;
};

function Child({ userInfo, title, isActive }: Props) {
  console.log("Child component rendered");
  return (
    <div>
      <h3>{title}</h3>
      <p>User: {userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const userInfo = useMemo(() => ({ name: "GeeksforGeeks", age: 21 }), []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child userInfo={userInfo} title="Profile Info" isActive={true} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

