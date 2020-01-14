import { DefaultTheme } from "styled-components";

const JsTheme: DefaultTheme = {
	darkTheme: false,

	borderRadius: ["0px", "4px", "8px"],
	boxShadow: [
		"none",
		"rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
		"rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
	],

	colors: {
		main: [
			"#fdf6bd",
			"#fcf29c",
			"#faed7b",
			"#f9e95b",
			"#f8e43a",
			"#f7e019",
			"#e6cf08",
			"#c5b107",
			"#a49406",
			"#847605"
		],
		secondary: [],

		base: [
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
		],

		contrast: [
			"#000",
			"#090909",
			"#111",
			"#1a1a1a",
			"#222",
			"#2b2b2b",
			"#333",
			"#3c3c3c",
			"#444",
			"#4d4d4d"
		],

		gray: [
			"",
			"#fff",
			"#e6e6e6",
			"#c4c4c4",
			"#a2a2a2",
			"#808080",
			"#5e5e5e",
			"#3c3c3c",
			"#1a1a1a",
			"#000"
		]
	}
};

export default JsTheme;
