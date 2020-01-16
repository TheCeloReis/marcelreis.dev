import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkTheme: boolean;

    borderRadius: string[];
    boxShadow: string[];

    media: {
      lessThan: {
        huge: string;
        large: string;
        medium: string;
        small: string;
      };
      between: {
        smallAndMedium: string;
        smallAndLarge: string;
        smallAndHuge: string;
        mediumAndLarge: string;
        mediumAndHuge: string;
        largeAndHuge: string;
      };
      greaterThan: {
        huge: string;
        large: string;
        medium: string;
        small: string;
      };
    };

    colors: {
      main: string[];
      secondary: string[];

      base: string[];
      contrast: string[];

      gray: string[];
    };
  }
}
