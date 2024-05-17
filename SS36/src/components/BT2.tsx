import React, { useState,useEffect } from 'react'

export default function BT2() {
    const [count,setCount]=useState(0);
    function handleChangeCount() {
        setCount(count+1);
    }
    useEffect(()=>{
        document.title=`${count}`;
    })
  return (
    <div>
        <h2>Bài 2</h2>
        <button onClick={handleChangeCount}> Click {count} lần </button>
    </div>
  )
}
