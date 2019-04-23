/**
 * ajax同步请求
 * @param type
 * @param data
 * @param callBack
 */
function getDataFromServiceAsync(ajaxUrl,type,data,callBack) {
	
    $.ajax({
        type: type,
        dataType: "json",
        url: ajaxUrl,
        data:data,
        async:false,
        success:function (res) {
            callBack(res);
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
        	console.log("异常错误："+textStatus);
		}
    });
}
/**
 * ajax异步请求
 * @param type
 * @param data
 * @param callBack
 */
function getDataFromService(ajaxUrl,type,data,callBack) {
    $.ajax({
        type: type,
        dataType: "json",
        url: ajaxUrl,
        data:data,
        success:function (res) {
            callBack(res);
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
        	console.log("异常错误："+textStatus);
		}
    });
}
/**日期格式化*/
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/**URL参数解析*/
var parseUrlHandler= function (url, isEncode) {
    var isEncode = isEncode || false, reg = /([^=&?]+)=([^=&?]+)/g, obj = {}, url = url;
    url.replace(reg, function () {
        var arg = arguments;
        obj[arg[1]] = isEncode ? decodeURIComponent(arg[2]) : arg[2];
    });
    return obj;
};
var HASH = parseUrlHandler(window.location.href, true);

/***
 * 判断空字符串
 * @param obj
 * @returns
 */
function isEmpty(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else if(obj.replace(/(^\s*)|(\s*$)/g, "").length ==0){
        return true;
    }else{
    	return false;
    }
}

/**
 * 判断是否是数字
 * @param input
 * @returns
 */
function isNumber(params){
	var reg = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/ 

	if(!reg.test(params)){
		return false;
	}
	return true;
}
/**
 * 获取Cookie
 * @param cookie_name
 * @returns
 */
function getCookie(cookie_name)
{
    var allcookies = document.cookie;
    var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度
  
    // 如果找到了索引，就代表cookie存在，
    // 反之，就说明不存在。
    if (cookie_pos != -1)
    {
        // 把cookie_pos放在值的开始，只要给值加1即可。
        cookie_pos += cookie_name.length + 1;      //这里容易出问题，所以请大家参考的时候自己好好研究一下
        var cookie_end = allcookies.indexOf(";", cookie_pos);
  
        if (cookie_end == -1)
        {
            cookie_end = allcookies.length;
        }
  
        var value = unescape(allcookies.substring(cookie_pos, cookie_end));         //这里就可以得到你想要的cookie的值了。。。
    }
    return value;
}