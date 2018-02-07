document.getElementById("info").onclick = function () {
    var u_name = document.getElementById("u_name").value;
    var u_code = document.getElementById("u_code").value;
    var u_pinying = document.getElementById("u_pinying").value;

    var xhr = new XMLHttpRequest();
    var url = "http://route.showapi.com/131-43";
    //添加参数
    url = addURLParam(url, "showapi_appid", "51699");
    url = addURLParam(url, "showapi_sign", "423c642aaf344e5b876ed34167f60c91");
    url = addURLParam(url, "name", u_name);
    url = addURLParam(url, "code", u_code);
    url = addURLParam(url, "pinying", u_pinying);
    //初始化请求
    xhr.open("get", url, true);
    xhr.send(null);

    xhr.readystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xhr.responseText;
            console.log("showapi_res_body:{'city':'昆明','prov':'云南'}");
            console.log("showapi_res_code:0");
            console.log("showapi_res_error:用户输入有误！");

        }
    }
    function addURLParam(url, name, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value); //防止查询字符串的格式出现问题
        return url;

    }

}
