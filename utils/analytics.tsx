import ReactGA from "react-ga";

export const initGA = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("GA init", process.env.GA_TOKEN);
    ReactGA.initialize(process.env.GA_TOKEN);
  } else {
    console.log("GA init in development");
  }
};
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`);
  if (process.env.NODE_ENV === "development") {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};
export const logEvent = (category = "", action = "") => {
  console.log(`Logging event for ${category}/${action}`);
  if (process.env.NODE_ENV === "development" && (category && action)) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  console.log(`Logging exception for ${description}/${fatal ? "FATAL" : ""}`);
  if (process.env.NODE_ENV === "development" && description) {
    ReactGA.exception({ description, fatal });
  }
};
