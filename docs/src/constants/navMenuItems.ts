/**
 * Ordering of navigation menu items
 */

// navigation menu list type
type NavMenuList = Array<
  [
    // human-readable string name
    string,
    // slug/path
    string,
    // optional boolean switch that renders a divider below the item if it is true
    boolean?,
  ]
>;

// navigation menu order
const navMenuItems: NavMenuList = [
  ["Introduction", "/"],
  ["Getting Started", "/getting-started", true],
  ["Base", "/base"],
  ["Layout", "/layout"],
  ["Text", "/text"],
  ["Button", "/button"],
  ["Prefabs", "/prefabs", true],
  ["Media", "/media", true],
  ["Recipes", "/recipes"],
  ["Sandbox", "/sandbox", true],
];

export default navMenuItems;
