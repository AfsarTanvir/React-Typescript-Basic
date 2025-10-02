import { useState, useRef, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
function UseRef() {
  return (
    <>
      <div className="heading-div">
        <h1 className="heading">UseRef</h1>
      </div>
      <div>
        <p>1. Accessing the DOM using useRef hook.</p>
        <AccessingDom />
      </div>
      <hr />
      <div>
        <p>2. Persisting Values Across Renders</p>
        <PreviousValue />
      </div>
    </>
  );
}

export default UseRef;

// 1. Accessing the DOM using useRef hook.
export function AccessingDom() {
  const focusPoint = useRef<null | HTMLTextAreaElement>(null);
  const onClickHandler = () => {
    if (focusPoint.current) {
      focusPoint.current.value = "The quick brown fox jumps over the lazy dog";

      focusPoint.current.focus();
    }
  };
  return (
    <Fragment>
      <div>
        <Button onClick={onClickHandler}>ACTION</Button>
      </div>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea ref={focusPoint} />
    </Fragment>
  );
}

// 2. Persisting Values Across Renders
export function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCountRef.current}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}
