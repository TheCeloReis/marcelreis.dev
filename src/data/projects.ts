type Project = {
  uri: string;
  name: string;
  description: string;
  github: string;
  website: string;
};

const portalSpaceX: Project = {
  uri: "portal-spaceX",
  name: "Portal SpaceX",
  description:
    "Vue 3 project consuming the SpaceX Rest API. See the latest information about launches, rocketes and even more",
  github: "https://github.com/MarcelReis/portalSpaceX",
  website: "https://portal-spacex.marcelreis.dev/",
};

const odinbook: Project = {
  uri: "odinbook",
  name: "Odinbook",
  description:
    "Social media inspired by Facebook. It allows users to connect, share and create a unique profile. Here I aim to achieve a full-stack project from the bottom up",
  github: "https://github.com/MarcelReis/OdinBook",
  website: "https://odinbook.marcelreis.dev/",
};

const aircall: Project = {
  uri: "aircall",
  name: "Aircall",
  description:
    "This is a web responsive implementation of the famous Aircall app, using the Tracktor Design System.",
  github: "https://github.com/MarcelReis/aircall",
  website: "https://aircall.marcelreis.dev/",
};

const fashionista: Project = {
  uri: "fashionista",
  name: "Fashionista",
  description:
    "E-Commerce frontend built with React and Redux. Capstone from a Frontend Bootcamp.",
  github: "https://github.com/Squad-1-React-Codenation/Fashionista",
  website: "https://undefined.netlify.app/",
};

export const projects = [portalSpaceX, odinbook, aircall, fashionista];
