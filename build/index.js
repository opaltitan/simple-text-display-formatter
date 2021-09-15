import './models/models';
import { formatData } from './data-formatter';
export var DataFormatter;
(function (DataFormatter) {
    // export const FORMAT_TYPE = DISPLAY_FORMAT_TYPE;
    DataFormatter.format = formatData;
})(DataFormatter || (DataFormatter = {}));
