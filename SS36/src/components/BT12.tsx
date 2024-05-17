import React, { useEffect, useState } from 'react'

export default function BT12() {
    const [time,setTime]=useState(0);
    const [stop,setStop]=useState(true);
    useEffect(()=>{
        if (!stop) {
             let intervalId=  setInterval(()=>{setTime(time+0.001)},1);
            return ()=>clearInterval(intervalId);
        }else return;
    })
   
  return (
    <div>
        <h1>Bài 12</h1>
        <p> Đếm thời gian: {time.toFixed(3)}</p>
        <button onClick={()=>setStop(false)}>Bấm giờ</button>
        <button onClick={()=>setStop(true)}>Dừng lại</button>
    </div>
  )
}
