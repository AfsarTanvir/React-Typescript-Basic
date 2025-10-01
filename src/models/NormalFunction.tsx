function add(x: number, y: number): number {
  return x + y;
}

function NormalFunction() {
  function mul(x: number, y: number): number {
    return x * y;
  }

  const sub = (x: number, y: number): number => {
    return x-y;
  }
  return (
    <>
      <h1>{normalFunctionStr}</h1>
      <p>{normalFunctionStr}</p>
      <p>{add(3, 4)}</p>
      <p>{mul(3, 4)}</p>
      <p>{sub(3, 4)}</p>
      <p></p>
    </>
  );
}

export default NormalFunction;

export const normalFunctionStr = "Normal Function";
 