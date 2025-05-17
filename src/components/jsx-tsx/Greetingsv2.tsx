import { useState } from "react";

interface GreetingProps {
  name: string;
  age?: number;
}

export function Greeting({ name, age }: GreetingProps) {
    const [isHappy, setIsHappy] = useState(false);
    const displayName = name ?? "Guest"; // although this will cause time complexity during run time,
                                        // however this approach covers the null & ""!
    return (
      <div>
        <h1>Hello, {name}!</h1>
        {age && <p>Age: {displayName}</p>}
        <button onClick={() => setIsHappy(!isHappy)}>
          {isHappy ? "😊" : "😢"}
        </button>
      </div>
    );
  }