const fileName = "hotSpots.json";

var req = new XMLHttpRequest();
req.open("GET", fileName, false);
req.send(null);

var jsonFile = JSON.parse(req.responseText);

// Prints list of locations 
function printList(jsonFile){
    var numResults = jsonFile.results.length;
    var listItem = document.getElementById("placeList");
    for(let i = 0; i < numResults; i++){
        listItem.innerHTML += "<li>" + jsonFile.results[i].name + "</li>";
    }
}
