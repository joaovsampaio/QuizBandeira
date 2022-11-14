import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      details: string;
      misc: string;
      bgColor: string;

      title: string;

      white: string;
      black: string;
    };
  }
}
