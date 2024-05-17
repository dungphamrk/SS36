import React, { useEffect, useState } from 'react'

export default function BT9() {
    const [time,setTime]=useState(0);
    useEffect(()=>{
        const count =setInterval(()=>{setTime(time+1)},1000);
        return ()=> clearInterval(count);
    })
  return (
    <div>
      <h1>Bài 9</h1>
        <p>Thời gian đã qua là : {time}</p>
    </div>
  )
}
