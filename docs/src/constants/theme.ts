export interface ITheme {
  theme: {
    colors: { [key: string]: string };
  };
}

const theme: ITheme = {
  colors: {
    background: "#fffffe",
  },
};

export default theme;
