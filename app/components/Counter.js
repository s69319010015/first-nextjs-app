"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px 0" }}>
      <p>คุณกดปุ่มไปแล้ว {count} ครั้ง</p>
      <button onClick={() => setCount(count + 1)}>กดเพิ่ม +1</button>
    </div>
  );
}