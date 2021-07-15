const wifiElement = document.getElementById("wifiCon");

if (navigator.onLine) {
  wifiElement.className = "fa fa-wifi";
} else {
  alert("wifiに接続されてないで！");
  wifiElement.className = "fa fa-exclamation-triangle";
}

window.addEventListener("online", (e) => {
  wifiElement.className = "fa fa-wifi";
});

window.addEventListener("offline", (e) => {
  alert("wifiに接続されてないで！");
  wifiElement.className = "fa fa-exclamation-triangle";
});
