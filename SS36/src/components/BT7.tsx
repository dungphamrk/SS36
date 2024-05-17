import React, { useState, useRef, useEffect } from 'react';

const BT7: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const previousCountRef = useRef<number | undefined>();

  useEffect(() => {
    previousCountRef.current = count;
  });
  const previousCount = previousCountRef.current;

  return (
    <div>
      <p>Số lượng hiện tại: {count}</p>
      <p>Số lượng trước đó: {previousCount !== undefined ? previousCount : 'N/A'}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};

export default BT7;
