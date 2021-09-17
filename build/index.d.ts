export declare namespace DataFormatter {
    enum DISPLAY_FORMAT_TYPE {
        TEXT = "TEXT",
        DATE = "DATE",
        NUMBER = "NUMBER",
        DOLLAR = "DOLLAR",
        PERCENT = "PERCENT"
    }
    enum DISPLAY_NUMBER_FORMATS {
        NONE = "NONE",
        THOUSANDS = "THOUSANDS",
        MILLIONS = "MILLIONS",
        BILLIONS = "BILLIONS"
    }
    const format: (data: string | number | Date, formatType: DISPLAY_FORMAT_TYPE, numberFormat?: DISPLAY_NUMBER_FORMATS) => string;
}
