export interface ITheme {
  colors: {
    [index: string]: string;
  };
  space: number[];
  fonts: {
    [index: string]: string;
  };
  fontSizes: {
    [index: string]: string;
  };
  fontWeights: {
    [index: string]: number;
  };
  lineHeights: {
    [index: string]: number;
  };
  borders: {
    [index: string]: string;
  };
  radii: {
    [index: string]: string;
  };
  shadows: {
    [index: string]: string;
  };
  transition: {
    [index: string]: string;
  };
}
