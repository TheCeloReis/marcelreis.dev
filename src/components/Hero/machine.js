import { createMachine, interpret, assign } from "@xstate/fsm";

const FULL = {
  target: "full",
  actions: assign({ Component: (_, { Component }) => Component }),
};

const HERO = {
  target: "hero",
  actions: assign({ Component: (_, { Component }) => Component }),
};

const NORMAL = {
  target: "normal",
  actions: assign({ Component: null }),
};

const heroMachine = createMachine({
  id: "hero",
  initial: "full",
  context: {
    Component: null,
  },
  states: {
    normal: { on: { FULL, HERO } },
    full: { on: { HERO, NORMAL } },
    hero: { on: { FULL, NORMAL } },
  },
});

export const heroService = interpret(heroMachine).start();
