import React, { useEffect, useState } from 'react'

export default function BT10() {
    const [key,setKey]=useState("");
    const [keyCode,setKeyCode]=useState<number>();
    useEffect(()=>{
        document.addEventListener('keydown', function(event) {
            setKey(event.key);
            setKeyCode((event.key.charCodeAt(0)));
        });
    })
  return (
    <div>
        <p>'Bạn đã nhấn phím: ' {key}</p>
        <p>'Mã phím: '{keyCode}</p>
    </div>
  )
}
