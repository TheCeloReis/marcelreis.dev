import JsTheme from "./jsTheme";
import { DefaultTheme } from "styled-components";

const tsTheme: DefaultTheme = {
	...JsTheme,
	darkTheme: true,

	colors: {
		...JsTheme.colors,
		main: [
			"#77c8ff",
			"#5bf",
			"#33adff",
			"#119fff",
			"#008eee",
			"#007acc",
			"#06a",
			"#005188",
			"#003d66",
			"#002944"
		],

		base: [
			"#2a2a2a",
			"#222",
			"#191919",
			"#111",
			"#080808",
			"#000",
			"#000",
			"#000",
			"#000",
			"#000"
		],

		contrast: [
			"#fff",
			"#f7f7f7",
			"#eee",
			"#e6e6e6",
			"#ddd",
			"#d5d5d5",
			"#ccc",
			"#c4c4c4",
			"#bbb",
			"#b3b3b3"
		]
	}
};

export default tsTheme;
