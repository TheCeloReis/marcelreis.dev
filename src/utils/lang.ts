export enum langEnum {
  EN_US = "en-us",
  PT_BR = "pt-br",
}

export const supportedLangs: langEnum[] = [langEnum.EN_US, langEnum.PT_BR];

export const getPaths = (path: string): string[] =>
  supportedLangs.map((lang) => `/${lang}${path}`);
