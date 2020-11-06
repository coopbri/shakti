// Global component theme for prefabs.

/**
 * Theme interface
 */
export interface Theme {
  shadows: { [key: string]: string };
}

/**
 * Global theme object (interface is colocated)
 */
const theme: Theme = {
  shadows: {
    main: "0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);",
  },
};

export default theme;
