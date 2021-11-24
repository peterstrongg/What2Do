const fileName = "hotSpots.json";

var request = new XMLHttpRequest();
request.open("GET", fileName, false);
request.send(null);

var jsonData = JSON.parse(request.responseText);

function printList(jsonData){
    var placeString = "";
    var numResults = jsonData.results.length;
    for(let i = 0; i < numResults; i++){
        var placeString = placeString + jsonData.results[i].name + ", ";
    }
    document.getElementById("name").innerHTML = placeString;
}
