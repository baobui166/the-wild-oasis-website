"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);

  return (
    <div>
      <p>there are {users.length} users</p>
      <button onClick={() => setCount((pre) => pre + 1)}>{count}</button>;
    </div>
  );
}

export default Counter;
