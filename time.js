timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行

function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

    var s = '';
	//出力用
	if (hour < 10 && min < 10 && sec < 10){
        s = year + "/" + mon + "/" + day + "/" + "0" + hour + ":" + "0" + min + ":" + "0" + sec;
    } else if (hour < 10 && min < 10 ){
        s = year + "/" + mon + "/" + day + "/" + "0" + hour + ":" + "0" + min + ":" + sec;
    } else if (hour < 10 && sec < 10){
        s = year + "/" + mon + "/" + day + "/" + "0" + hour + ":" + min + ":" + "0" + sec;
    } else if (min < 10 && sec < 10){
        s = year + "/" + mon + "/" + day + "/" + hour + ":" + "0" + min + ":" + "0" + sec;
    } else if (hour < 10) {
        s = year + "/" + mon + "/" + day + "/" + "0" + hour + ":" + min + ":" + sec;
    } else if (min < 10) {
        s = year + "/" + mon + "/" + day + "/" + hour + ":" + "0" + min + ":" + sec;
    } else if (sec < 10) {
        s = year + "/" + mon + "/" + day + "/" + hour + ":" + min + ":" + "0" + sec;
    } else {
        s = year + "/" + mon + "/" + day + "/" + hour + ":" + min + ":" + sec;
    }
	return s;
}
