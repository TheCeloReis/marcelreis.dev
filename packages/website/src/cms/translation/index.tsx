import React, { useEffect, useContext } from "react";

type ContextType = {
  initialized: boolean;
  t: { [key: string]: string };
};

const LangContext = React.createContext<ContextType>({
  initialized: false,
  t: {},
});
const LangProvider = LangContext.Provider;

export default LangProvider;

export function useTranslation(dict?: {
  [key: string]: string;
}): (key: string) => string {
  const context = useContext(LangContext);
  if (!context.initialized) {
    context.t = dict;
    context.initialized = true;
  }

  useEffect(() => {
    dict ?? (context.t = { ...context.t, ...dict });
  }, [dict, context]);

  const t = (key: string) => {
    return context.t[key];
  };

  return t;
}
