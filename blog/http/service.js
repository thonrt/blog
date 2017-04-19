
import $ from "jquery"
export default {
    requestData(option, successCallback, errorCallBack) {
        var server = "http://localhost:8100";
        return $.ajax({
            url: server + option.url,
            dataType: 'json',
            type: option.method || "GET",
            cache: false,
            xhrFields: {
              withCredentials: true
            },
            data: option.data || null
        });
    }
}
