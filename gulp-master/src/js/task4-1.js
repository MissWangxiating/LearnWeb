//get方法进行ajax
function ajax_get (url,args) {
    var u_name = args[0]
    var u_code = args[1]
    var u_pinying = args[2]
    var u_appid = args[3]
    var u_sign = args[4]
    var xhr = new XMLHttpRequest();
    //添加参数
    url = addURLParam(url, "showapi_appid", u_appid);
    url = addURLParam(url, "showapi_sign", u_sign);
    url = addURLParam(url, "name", u_name);
    url = addURLParam(url, "code", u_code);
    url = addURLParam(url, "pinying", u_pinying);
    //初始化请求
    xhr.open("get", url, true);
    xhr.send(null);
    if (xhr.Status == 200) {
        console.log("响应成功！");
       // success;
    }
    else{
        console.log("响应失败!");//为什么明明响应成功了，还是会输出响应失败？
       // err;
    }

    function addURLParam(url, name, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value); //防止查询字符串的格式出现问题
        return url;
    }
}
//post 方法进行ajax
function post_ajax(url,args) {
    var u_name = args[0]
    var u_code = args[1]
    var u_pinying = args[2]
    var u_appid = args[3]
    var u_sign = args[4]
    var xhr = new XMLHttpRequest();
    var param ;
    var param1 = addParam("name",u_name);
    var param2 = addParam("code",u_code);
    var param3 = addParam("pinying",u_pinying);
    var param4 = addParam("showapi_appid", u_appid);
    var param5 = addParam("showapi_sign", u_sign);
    param = param4 + "&" + param2 + "&" + param3 + "&" + param1 + "&"+ param5;
    xhr.open("post",url,true);
    //xhr.setRequestHeader("cache-control","no-cache");
    xhr.setRequestHeader("content-Type","text/html;charset=utf-8")
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(param);
    function addParam(name,value){
        var a_param = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return a_param;   
    }
    
}
document.getElementById("info").onclick =function () {
    var u_name = document.getElementById("u_name").value;
    var u_code = document.getElementById("u_code").value;
    var u_pinying = document.getElementById("u_pinying").value;
    var url = "http://route.showapi.com/131-43";
    var appid = "51699";
    var sign = "423c642aaf344e5b876ed34167f60c91";
    var args = [u_name,u_code,u_pinying,appid,sign];
    //post_ajax(url,args);
    ajax_get(url,args);

}