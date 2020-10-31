import { useState, useEffect } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

/**
 * Helper function to get the window dimensions using the browser window API.
 */
const getWindowDimensions = (): WindowDimensions => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

/**
 * Get the dimensions of the window.
 *
 * @returns {WindowDimensions} window dimensions (height and width) in pixels
 */
const useWindowDimensions = (): WindowDimensions => {
  // dimensions state
  const [dimensions, setDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  );

  useEffect(() => {
    // handle window resize
    // TODO debounce (optimization)
    const handleResize = () => {
      setDimensions(getWindowDimensions());
    };

    // add window resize listener
    window.addEventListener("resize", handleResize);

    // cleanup: remove window resize listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

export default useWindowDimensions;
