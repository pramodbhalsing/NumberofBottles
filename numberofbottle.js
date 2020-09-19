

var numberOfBottles = 99

function numberBottles(numberOfBottles){
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 0) {
       var bottleWord = "No more";
    } 
     

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
}

 numberBottles(numberOfBottles);