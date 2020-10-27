export interface ITheme {
  colors: { [key: string]: string };
}

const theme: ITheme = {
  colors: {
    background: "#fffffe",
    lightgray: "#d5d5d5",
    darkgray: "#787878",
    text: "#353839",
    pink: "#feccfe",
    purple: "#cc98fe",
    blue: "#99ffff",
    green: "#ccffcc",
    orange: "#ffcd99",
    red: "#ff9999",
  },
};

export default theme;
