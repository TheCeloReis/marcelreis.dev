import { createMachine, interpret } from "@xstate/fsm";

const heroMachine = createMachine({
  id: "hero",
  initial: "full",
  states: {
    normal: { on: { FULL: "full", HERO: "hero" } },
    full: { on: { HERO: "hero", NORMAL: "normal" } },
    hero: { on: { FULL: "full", NORMAL: "normal" } },
  },
});

export const heroService = interpret(heroMachine).start();
