import { DISPLAY_FORMAT_TYPE } from './models/models';
import { formatData } from './data-formatter';

export namespace DataFormatter {
  export const FORMAT_TYPE = DISPLAY_FORMAT_TYPE;

  export const format = formatData;
}
