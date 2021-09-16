import { formatData } from './data-formatter';

export namespace DataFormatter {
  export enum DISPLAY_FORMAT_TYPE {
    TEXT = 'TEXT',
    DATE = 'DATE',
    NUMBER = 'NUMBER',
    DOLLAR = 'DOLLAR',
    PERCENT = 'PERCENT'
  };

  export enum DISPLAY_NUMBER_FORMATS {
    NONE = 'NONE',
    THOUSANDS = 'THOUSANDS',
    MILLIONS = 'MILLIONS',
    BILLIONS = 'BILLIONS'
  }

  export const format = (
    data: string | number | Date,
    formatType: DISPLAY_FORMAT_TYPE,
    numberFormat?: DISPLAY_NUMBER_FORMATS
  ) => formatData(data, formatType, numberFormat);
}
