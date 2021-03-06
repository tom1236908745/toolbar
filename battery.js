var battery = navigator.getBattery();

// 結果を受け取る（非同期）
battery.then(function (battery_manager){
    
    const battyElement = document.getElementById('batty');
    const left = battery_manager.level * 100;

    if(left == 100) {
        battyElement.className = 'fa fa-battery-full';
    } else if( 60 < left &&　left < 100 ) {
        battyElement.className = 'fa fa-battery-3';
    } else if ( 40 < left &&  left <= 60 ){
        battyElement.className = 'fa fa-battery-2';
    } else if ( 20 < left && left <= 40 ){
        battyElement.className = 'fa fa-battery-1';
    }　else {
        alert("充電もう少しで切れるで");
        battyElement.innerHTML = " 充電して下さいバッテリー残量は後" + battery_manager.level * 100 + "%です。 ";
    }
})
