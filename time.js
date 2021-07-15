timerID = setInterval('clock()',500); //0.5秒毎にclock()を実行

function clock() {
	document.getElementById("view_clock").innerHTML = getNow();
}

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = '';
	if(now.getHours() < 10){ 
		hour = "0" + now.getHours();
	} else {
		hour = now.getHours();
	}
	  
	var min = '';
	if(now.getMinutes() < 10){ 
		min = "0" + now.getMinutes();
	} else {
		min = now.getMinutes();
	}
	
	var sec = '';
	if(now.getSeconds()() < 10){ 
		sec = "0" + now.getSeconds()();
	} else {
		sec = now.getSeconds()();
	}
	
	
	var s = year + "/" + mon + "/" + day + "/" + hour + ":" + min + ":" + sec;;
	
	return s;
}
