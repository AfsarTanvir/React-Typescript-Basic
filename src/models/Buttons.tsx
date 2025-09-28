import { useState, useRef, useEffect } from "react";

// It's better to use a proper interface instead of 'any'
interface ButtonsProps {
  id: number;
}

function Buttons(props: ButtonsProps) {
  const [cnt, setcnt] = useState(0);
  const divButton = useRef<HTMLDivElement>(null);
  
  // Use a state to control the color of the div
  const [divColor, setDivColor] = useState('black'); 

  // Side-effect 1: DOM Manipulation (runs after mount and on cnt change)
  useEffect(() => {
    if (divButton.current) {
      // Logic for random background color
      const maxHexValue = 16777215;
      const randomNum = Math.floor(Math.random() * maxHexValue);
      const hexColor = randomNum.toString(16).padStart(6, "0");

      divButton.current.style.height = "50px";
      divButton.current.style.textAlign = "center";
      divButton.current.style.background = `#${hexColor}`;
    }
  }, [cnt]); // Re-run this effect when 'cnt' changes

   return (
    <>
      <button
        onClick={() => {
          setcnt(cnt + 1);
          // Instead of document.querySelectorAll, we change the state
          // on the parent component or use a Context API if needed.
          // For now, we'll keep the direct change simple.
          
          // If you want all divs to turn red, the state must be lifted
          // to the parent component 'Button'.
          setDivColor('red'); 
        }}
      >
        Button {props.id}
      </button>
      <div 
        ref={divButton} 
        className="clsName" 
        style={{ color: divColor }} // Use state for color instead of direct DOM access
      >
        <p>My count number is {cnt}</p>
      </div>
    </>
  );
}

export function Button() {
  return (
    <>
      <Buttons id={1} />
      <Buttons id={2} />
      <Buttons id={3} />
    </>
  );
}

// Since 'Button' is the component used in Routes, it should be the default export
export default Button; 

// export default Buttons; // NOTE: Avoid exporting here if it's not the primary file export
