import './models/models';
export declare namespace DataFormatter {
    const format: (data: string | number | Date, formatType: import("./models/models").DISPLAY_FORMAT_TYPE, numberFormat?: import("./data-formatter").DISPLAY_NUMBER_FORMATS | undefined) => string | number | Date;
}
