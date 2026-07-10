"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]">
      <div
        className="h-14 w-14 animate-spin rounded-full border-2 border-cyan-300/20 border-t-cyan-300"
        aria-label="Loading ClickForge"
      />
    </div>
  );
}
