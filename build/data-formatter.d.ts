import { DISPLAY_FORMAT_TYPE } from './models/models';
export declare enum DISPLAY_NUMBER_FORMATS {
    NONE = "NONE",
    THOUSANDS = "THOUSANDS",
    MILLIONS = "MILLIONS",
    BILLIONS = "BILLIONS"
}
export declare const numberFormatMapping: {
    NONE: number;
    THOUSANDS: number;
    MILLIONS: number;
    BILLIONS: number;
};
export declare const formatData: (data: string | number | Date, formatType: DISPLAY_FORMAT_TYPE, numberFormat?: DISPLAY_NUMBER_FORMATS | undefined) => string | number | Date;
