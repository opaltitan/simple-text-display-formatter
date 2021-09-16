import { formatData } from './data-formatter';
export var DataFormatter;
(function (DataFormatter) {
    var DISPLAY_FORMAT_TYPE;
    (function (DISPLAY_FORMAT_TYPE) {
        DISPLAY_FORMAT_TYPE["TEXT"] = "TEXT";
        DISPLAY_FORMAT_TYPE["DATE"] = "DATE";
        DISPLAY_FORMAT_TYPE["NUMBER"] = "NUMBER";
        DISPLAY_FORMAT_TYPE["DOLLAR"] = "DOLLAR";
        DISPLAY_FORMAT_TYPE["PERCENT"] = "PERCENT";
    })(DISPLAY_FORMAT_TYPE = DataFormatter.DISPLAY_FORMAT_TYPE || (DataFormatter.DISPLAY_FORMAT_TYPE = {}));
    ;
    var DISPLAY_NUMBER_FORMATS;
    (function (DISPLAY_NUMBER_FORMATS) {
        DISPLAY_NUMBER_FORMATS["NONE"] = "NONE";
        DISPLAY_NUMBER_FORMATS["THOUSANDS"] = "THOUSANDS";
        DISPLAY_NUMBER_FORMATS["MILLIONS"] = "MILLIONS";
        DISPLAY_NUMBER_FORMATS["BILLIONS"] = "BILLIONS";
    })(DISPLAY_NUMBER_FORMATS = DataFormatter.DISPLAY_NUMBER_FORMATS || (DataFormatter.DISPLAY_NUMBER_FORMATS = {}));
    DataFormatter.format = function (data, formatType, numberFormat) { return formatData(data, formatType, numberFormat); };
})(DataFormatter || (DataFormatter = {}));
