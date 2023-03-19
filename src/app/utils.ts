export function toUpperCase(value: string): string {
  return value.toUpperCase();
}

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function getStringInfo(value: string): StringInfo {
  return {
    lowerCase: value.toLowerCase(),
    upperCase: value.toUpperCase(),
    characters: value.split(""),
    length: value.length,
    extraInfo: {},
  };
}
