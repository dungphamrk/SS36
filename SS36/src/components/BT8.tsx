import React, { useEffect } from "react";

export default function BT8() {
  let time = new Date();
  let month = time.getMonth();
  let season =
    month >= 2 && month <= 4
      ? "Spring"
      : month >= 5 && month <= 7
      ? "Summer"
      : month >= 8 && month <= 10
      ? "Autumn"
      : "Winter";
  return (
    <div>
      <p>Bây giờ là tháng:{month} </p>
      <p>Hiện tại là mùa {season}</p>
    </div>
  );
}