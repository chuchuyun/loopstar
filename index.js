function generateStar () {
    console.log("Hello, World!");
    var width = document.getElementById("width").value
    var height = document.getElementById("height").value
    
    width = parseInt(width, 10);
    height = parseInt(height, 10);
    console.log(width,height);
    var result = "";
    for (var i=0; i<height; i++) {
    	for (var j=0; j<width; j++) {
    		result += '*';
    	}
    	result += '\n';	
    }
    document.getElementById("printStar").innerHTML = result;
}

function generateMountainStar () {
	var width = document.getElementById("width").value;
	width = parseInt(width, 10);	
	var result = "";
	for (var i=0; i<width; i++) {
		result += "*" + i ;
		result += "\n";
	}
	document.getElementById("printMountainStar").innerHTML = result;
}


