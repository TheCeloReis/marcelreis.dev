export enum langEnum {
  EN_US = "en-us",
  PT_BR = "pt-br",
}

export const supportedLangs: langEnum[] = [langEnum.EN_US, langEnum.PT_BR];

export const getPaths = (path: string): string[] =>
  supportedLangs.map((lang) => `/${lang}${path}`);

export const getLang = (): langEnum => {
  const userLangs = navigator.languages.map((lang) => {
    return lang.toLowerCase().substring(0, 2);
  });

  let bestLanguage: langEnum;
  userLangs.some((usrLang) => {
    supportedLangs.some((supLang) => {
      const supLangCode = supLang.substring(0, 2);
      if (supLangCode === usrLang) {
        bestLanguage = supLang;
      }
      return bestLanguage;
    });
    return bestLanguage;
  });

  return bestLanguage || langEnum.EN_US;
};
