const fileName = "hotSpots.json";

var request = new XMLHttpRequest();
request.open("GET", fileName, false);
request.send(null);

var jsonData = JSON.parse(request.responseText);

function printList(jsonData){
    var placeString = "";
    for(let i = 0; i < 2; i++){
        var placeString = placeString + jsonData.results[i].name + "\n";
    }
    document.getElementById("name").innerHTML = placeString;
}
