
import $ from "jquery"
export default {
    requestData(option, successCallback, errorCallBack) {
        var server = "http://localhost:8000";
        return $.ajax({
            url: server + option.url,
            dataType: 'json',
            type: option.method || "GET",
            cache: false,
            data: option.data || null
        });
    }
}
