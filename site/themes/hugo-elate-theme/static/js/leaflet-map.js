function initMap() {
    var latLong1 = [39.4078969,-0.431551]; // VLC
    var latLong2 = [37.3754338,-5.9900776]; // SVQ

    var map1 = L.map("map1").setView(latLong1, 5);
    var map2 = L.map("map2").setView(latLong2, 5);

    L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);

    var icon = L.icon({
      iconUrl: "images/map-marker.png",
      iconSize:     [25, 41],
      //iconUrl: "images/map-loc.png",
      //iconSize:     [57, 66],
    });
    L.marker(latLong1, { icon: icon }).addTo(map1);
    L.marker(latLong2, { icon: icon }).addTo(map2);
}
document.addEventListener("DOMContentLoaded", initMap);
