import { DISPLAY_FORMAT_TYPE } from './models/models';
export declare type FORMAT_TYPE = DISPLAY_FORMAT_TYPE;
export declare const format: (data: string | number | Date, formatType: DISPLAY_FORMAT_TYPE, numberFormat?: import("./data-formatter").DISPLAY_NUMBER_FORMATS | undefined) => string | number | Date;
