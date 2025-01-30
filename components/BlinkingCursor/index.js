import { useEffect, useState } from "react";

export function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`text-white font-bold ml-1 ${visible ? "opacity-100" : "opacity-0"}`}>_</span>
  );
}
