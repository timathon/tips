
var newEmptyFileInDos = {
	Method 1: type nul > newfile.txt;
	Method 2: whateverInvalidCommand > newfile.txt;
}


var bowerInNpm = { // in package.json, put following:
  "scripts": {
    "postinstall": "bower cache clean && bower install"
  }
}

var setBowerComponetsFolder = {
	step1 : new file named as ".bowerrc" in root folder;
	step2 : {
		"directory": "public/assets/lib"
	}
}

