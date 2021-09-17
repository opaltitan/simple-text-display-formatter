var _a;
import { DISPLAY_FORMAT_TYPE, DISPLAY_NUMBER_FORMATS } from './models/models';
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
export var numberFormatMapping = (_a = {},
    _a[DISPLAY_NUMBER_FORMATS.NONE] = 1,
    _a[DISPLAY_NUMBER_FORMATS.THOUSANDS] = 1000,
    _a[DISPLAY_NUMBER_FORMATS.MILLIONS] = 1000000,
    _a[DISPLAY_NUMBER_FORMATS.BILLIONS] = 1000000000,
    _a);
export var formatData = function (data, formatType, numberFormat) {
    if (!data) {
        return '';
    }
    switch (formatType) {
        case DISPLAY_FORMAT_TYPE.NUMBER:
            return Number(numberFormat ? Number(data) / numberFormatMapping[numberFormat] : Number(data)).toFixed(2);
        case DISPLAY_FORMAT_TYPE.DOLLAR:
            return formatter.format(numberFormat ? Number(data) / numberFormatMapping[numberFormat] : Number(data));
        case DISPLAY_FORMAT_TYPE.PERCENT:
            return (Number(data) * 100).toFixed(2) + "%";
        case DISPLAY_FORMAT_TYPE.DATE:
            var dataDate = new Date(data);
            var year = dataDate.getFullYear();
            var rawMonth = dataDate.getMonth() + 1;
            var month = rawMonth < 10 ? "0" + rawMonth : rawMonth.toString();
            var rawDay = dataDate.getDate();
            var day = rawDay < 10 ? "0" + rawDay : rawDay.toString();
            return year + "-" + month + "-" + day;
        case DISPLAY_FORMAT_TYPE.TEXT:
        default:
            return data.toString();
    }
};
