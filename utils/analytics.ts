import ReactGA from "react-ga";

// NODE_ENV IS NOT SET AS DEVELOPMENT DURING THE EXPORT PROCESS, NEEDS INVESTIGATION
const isProduction = () =>
	!(
		process.env.NODE_ENV === "development" ||
		window.location.href.includes("localhost") ||
		window.location.href.includes("netlify.com")
	);

export const initGA = () => {
	if (isProduction()) {
		console.log("GA init");
		ReactGA.initialize(process.env.GA_TOKEN || "");
	} else {
		console.log("GA init in development");
	}
};
export const logPageView = () => {
	console.log(`Logging pageview for ${window.location.pathname}`);
	if (isProduction()) {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	}
};
export const logEvent = (category = "", action = "") => {
	console.log(`Logging event for ${category}/${action}`);
	if (isProduction() && category && action) {
		ReactGA.event({ category, action });
	}
};
export const logException = (description = "", fatal = false) => {
	console.log(`Logging exception for ${description}/${fatal ? "FATAL" : ""}`);
	if (isProduction() && description) {
		ReactGA.exception({ description, fatal });
	}
};
