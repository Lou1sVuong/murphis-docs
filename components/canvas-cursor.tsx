"use client";

import useCanvasCursor from "@/hook/use-canvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0 hidden md:block"
      id="canvas"
    />
  );
};
export default CanvasCursor;
