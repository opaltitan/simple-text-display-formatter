import { DISPLAY_FORMAT_TYPE } from './models/models';
import { formatData } from './data-formatter';
export var DataFormatter;
(function (DataFormatter) {
    DataFormatter.FORMAT_TYPE = DISPLAY_FORMAT_TYPE;
    DataFormatter.format = formatData;
})(DataFormatter || (DataFormatter = {}));
