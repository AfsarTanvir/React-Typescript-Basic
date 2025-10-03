// // 🔹 Basic Example (Forwarding a ref to a DOM element)
// import React, { useRef, forwardRef, useImperativeHandle } from "react";

// // Child component
// const Input = forwardRef<HTMLInputElement>((props, ref) => {
//   return <input type="text" ref={ref} {...props} />;
// });

// // Parent component
// function Parent() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const focusInput = () => {
//     inputRef.current?.focus();
//   };

//   return (
//     <div>
//       <Input ref={inputRef} placeholder="Type here..." />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }

// export default Parent;

//🔹 Advanced Example (Custom methods with useImperativeHandle)
import React, { useRef, forwardRef, useImperativeHandle } from "react";

type InputRefType = {
  focus: () => void;
  clear: () => void;
};

const CustomInput = forwardRef<
  InputRefType,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: function () {
      if (inputRef.current) inputRef.current.value = "";
      this.focus();
    },
  }));

  return <input {...props} ref={inputRef} />;
});

function ParentForwardRef() {
  const customInputRef = useRef<InputRefType>(null);

  return (
    <>
      <div className="heading-div">
        <h1 className="heading">Forward Ref</h1>
      </div>
      <div>
        <p>Advanced Example (Custom methods with useImperativeHandle)</p>
        <CustomInput ref={customInputRef} placeholder="Enter text" />
        <button onClick={() => customInputRef.current?.focus()}>Focus</button>
        <button onClick={() => customInputRef.current?.clear()}>Clear</button>
      </div>
    </>
  );
}

export default ParentForwardRef;
