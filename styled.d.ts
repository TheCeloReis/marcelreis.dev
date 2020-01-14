import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		darkTheme: boolean;

		borderRadius: string[];
		boxShadow: string[];

		colors: {
			main: string[];
			secondary: string[];

			base: string[];
			contrast: string[];

			gray: string[];
		};
	}
}
