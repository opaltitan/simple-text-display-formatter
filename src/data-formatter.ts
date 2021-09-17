import { DISPLAY_FORMAT_TYPE, DISPLAY_NUMBER_FORMATS } from './models/models';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const numberFormatMapping = {
  [DISPLAY_NUMBER_FORMATS.NONE]: 1,
  [DISPLAY_NUMBER_FORMATS.THOUSANDS]: 1000,
  [DISPLAY_NUMBER_FORMATS.MILLIONS]: 1000000,
  [DISPLAY_NUMBER_FORMATS.BILLIONS]: 1000000000
};

export const formatData = (
  data: string | number | Date,
  formatType: string,
  numberFormat?: string
): string => {
  if (!data) {
    return '';
  }
  switch (formatType) {
    case DISPLAY_FORMAT_TYPE.NUMBER:
      return Number(numberFormat ? Number(data) / numberFormatMapping[numberFormat] : Number(data)).toFixed(2);
    case DISPLAY_FORMAT_TYPE.DOLLAR:
      return formatter.format(numberFormat ? Number(data) / numberFormatMapping[numberFormat] : Number(data));
    case DISPLAY_FORMAT_TYPE.PERCENT:
      return `${(Number(data) * 100).toFixed(2)}%`;
    case DISPLAY_FORMAT_TYPE.DATE:
      const dataDate = new Date(data as string);
      const year = dataDate.getFullYear();
      const rawMonth = dataDate.getMonth() + 1;
      const month = rawMonth < 10 ? `0${rawMonth}` : rawMonth.toString();
      const rawDay = dataDate.getDate();
      const day = rawDay < 10 ? `0${rawDay}` : rawDay.toString();

      return `${year}-${month}-${day}`;
    case DISPLAY_FORMAT_TYPE.TEXT:
    default:
      return data.toString();
  }
};
