/**
 * Check type of prop for styled components. Used to determine appropriate CSS
 * styles.
 * @param prop {any} prop to test
 * @param px {boolean} if true (default), append `px` to literal
 */
const checkType = (prop: any, px = true) => {
  switch (typeof prop) {
    case "number":
      return px ? `${prop}px` : `${prop}`;
    case "string":
      return `${prop}`;
    default:
      return `${prop}`;
  }
};

export default checkType;
