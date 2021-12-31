var fs = require ('fs');



var obj = new Object();
obj.name = "John Doe";
obj.age = "35";
obj.city = "Collingwood";


fs.writeFile("./DATA/data.json", JSON.stringify(obj), err => {
	if (err) {
		console.log(err);
	} else {
		const data = require ('./DATA/data.json');
		console.log(data.toString());
		console.log("\t Name: ", data.name.toString());
		console.log("\t Age: ", data.age.toString());
		console.log("\t City: ", data.city.toString());
	}
});


