import useWindowDimensions from "./useWindowDimensions";

enum DimensionQuery {
  WidthAbove = "WidthAbove",
  WidthBelow = "WidthBelow",
  HeightAbove = "HeightAbove",
  HeightBelow = "HeightBelow",
}

/**
 * Query the dimensions of the window against a breakpoint.
 * @param test {any} test to perform
 * @param breakpoint {number} pixel value to test against
 *
 * @returns {boolean|undefined} Result of the dimension query test. True is
 * returned if the test passes, e.g. in a "WidthAbove" test, the test would pass
 * if the window width is larger than the specified breakpoint. False is
 * returned if the test fails. If an invalid test is passed in, undefined is
 * returned.
 */
const useWindowQuery = (
  test: keyof typeof DimensionQuery,
  breakpoint: number,
): boolean | undefined => {
  // get dimensions of window
  const { width, height } = useWindowDimensions();

  switch (test) {
    // check if window width is above breakpoint
    case DimensionQuery.WidthAbove:
      return width >= breakpoint;
    // check if window width is below breakpoint
    case DimensionQuery.WidthBelow:
      return width <= breakpoint;
    // check if window height is above breakpoint
    case DimensionQuery.HeightAbove:
      return height >= breakpoint;
    // check if window height is below breakpoint
    case DimensionQuery.HeightBelow:
      return height <= breakpoint;
    // invalid test
    default:
      return undefined;
  }
};

export default useWindowQuery;
