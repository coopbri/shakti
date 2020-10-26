/**
 * Check type of prop for styled components. Used to determine appropriate CSS
 * styles.
 * @param prop {any} prop to test
 */
const checkType = (prop: any) => {
  switch (typeof prop) {
    case "number":
      return `${prop}px`;
    case "string":
      return `${prop}`;
    default:
      return `${prop}`;
  }
};

export default checkType;
