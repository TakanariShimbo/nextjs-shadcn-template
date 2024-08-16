"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex justify-center flex-col items-center">
      <p className="p-24 text-3xl font-bold text-primary">HELLO WORLD</p>
      <Button onClick={() => setCount((prev) => prev + 1)}>Clicked {count} times</Button>
    </div>
  );
}
