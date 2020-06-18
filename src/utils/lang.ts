export enum langEnum {
  EN_US = "en-us",
  PT_BR = "pt-br",
}

export const supportedLangs: langEnum[] = [langEnum.EN_US, langEnum.PT_BR];

export const getPaths = (path: string): string[] =>
  supportedLangs.map((lang) => `/${lang}${path}`);

export const getLang = (): langEnum =>
  (navigator.languages
    .map((lang) => lang.toLowerCase())
    .find((lang) => supportedLangs.includes(lang as langEnum)) ||
    langEnum.EN_US) as langEnum;
