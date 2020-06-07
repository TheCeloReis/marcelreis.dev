import ReactGA from "react-ga";

const isProduction = (): boolean =>
  !(
    process.env.NODE_ENV === "development" ||
    window.location.href.includes("localhost") ||
    window.location.href.includes("netlify.com")
  );

export const initGA = (): void => {
  if (isProduction()) {
    ReactGA.initialize(process.env.GA_TOKEN);
    return;
  }
  console.log("GA: Initialized in development");
};
export const logPageView = (): void => {
  if (isProduction()) {
    ReactGA.pageview(window.location.pathname);
    return;
  }
  console.log(`GA: Logging pageview for ${window.location.pathname}`);
};
export const logEvent = (category: string, action: string): void => {
  if (isProduction()) {
    ReactGA.event({ category, action });
    return;
  }
  console.log(`GA: Logging event for ${category}/${action}`);
};
export const logException = (description: string, fatal: boolean): void => {
  if (isProduction() && description) {
    ReactGA.exception({ description, fatal });
    return;
  }
  console.log(
    `GA: Logging exception for ${description}/${fatal ? "FATAL" : ""}`
  );
};
