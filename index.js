const fileName = "hotSpots.json";

var request = new XMLHttpRequest();
request.open("GET", fileName, false);
request.send(null);

var jsonData = JSON.parse(request.responseText);

document.getElementById("test").innerHTML = jsonData.results[0].fsq_id;

