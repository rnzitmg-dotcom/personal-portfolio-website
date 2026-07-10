"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const update = (event: MouseEvent) =>
      setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-10 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl lg:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}
