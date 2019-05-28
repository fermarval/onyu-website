function initMap() {
    var latLong1 = [37.375433, -5.990077]; // Wiesbaden
    var latLong2 = [39.407899, -0.431551]; // Wiesbaden

    var map = L.map("map").setView(latLong1, 5);

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
    var marker1 = L.marker(latLong1, { icon: icon }).addTo(map);
    var marker2 = L.marker(latLong2, { icon: icon }).addTo(map);

}
document.addEventListener("DOMContentLoaded", initMap);
