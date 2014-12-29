var map;
function init() {
    var mapCanvas = document.getElementById("map_canvas");
    var myLatlng = new google.maps.LatLng(34.733758, 135.496849);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    };
    map = new google.maps.Map(mapCanvas, mapOptions);
    setCheckEvent();
    var bounds = new google.maps.LatLngBounds();
    infos.forEach(function(info){
        var myLatlng = new google.maps.LatLng(info.lat, info.lng);
        bounds.extend(myLatlng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
        // マーカのバインド設定
        if (info.location === '大阪'){
            marker.bindTo("visible", marker.getMap(), "osakaVisible");
        } else if(info.location === '京都'){
            marker.bindTo("visible", marker.getMap(), "kyotoVisible");
        } else {
            marker.bindTo("visible", marker.getMap(), "hyougoVisible");
        }
    });
    //  ズームサイズを調整
    map.fitBounds(bounds);
}
google.maps.event.addDomListener(window, 'load', init);
/*
 *  チェックボックスイベント登録
 */
function setCheckEvent(){
    // 大阪
    map.set("osakaVisible", true);
    var osakaChk = document.getElementById("osakaChk");
    google.maps.event.addDomListener(osakaChk, "click", function(){
        map.set("osakaVisible", Boolean(osakaChk.checked));
    });
    // 京都
    map.set("kyotoVisible", true);
    var kyotoChk = document.getElementById("kyotoChk");
    google.maps.event.addDomListener(kyotoChk, "click", function(){
        map.set("kyotoVisible", Boolean(kyotoChk.checked));
    });
    // 兵庫
    map.set("hyougoVisible", true);
    var hyougoChk = document.getElementById("hyougoChk");
    google.maps.event.addDomListener(hyougoChk, "click", function(){
        map.set("hyougoVisible", Boolean(hyougoChk.checked));
    });
}
var infos = [
    {location: '大阪', lat: 34.733758, lng: 135.496849},
    {location: '大阪', lat: 34.683379, lng: 135.500226},
    {location: '京都', lat: 34.98649, lng: 135.757503},
    {location: '兵庫', lat: 34.699826, lng: 135.190234}
];
