const fileName = "../static/hotSpots.json";     // Path from index.html

var req = new XMLHttpRequest();
req.open("GET", fileName, false);
req.send(null);

var jsonFile = JSON.parse(req.responseText);

// Prints list of places
var numResults = jsonFile.results.length;

if(numResults >= 1){
     var listItem = document.getElementById("placeList");
     for(let i = 0; i < numResults; i++){
          listItem.innerHTML += "<li>" + jsonFile.results[i].name + "</li>";
}
} else {
     document.getElementById("nothingFound").innerHTML = "Nothing found under that zip code";
}
