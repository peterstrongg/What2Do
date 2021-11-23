const fileName = "hotSpots.json";

var request = new XMLHttpRequest();
request.open("GET","hotSpots.json", false);
request.send(null);

var JSON_file = JSON.parse(request.responseText);
document.getElementById("test").innerHTML = JSON_file;
