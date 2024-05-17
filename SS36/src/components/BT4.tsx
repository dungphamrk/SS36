import React, { useRef, useEffect } from "react";

const BT4: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <h1>Bài 4</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

export default BT4;
