const { response } = require("express");
var data = require("../data.json");

exports.addFriend = function(request, response) {   
	
	newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": 'https://www.pngitem.com/pimgs/m/53-533248_cartoon-person-without-face-person-cartoon-hd-png.png',
	}

	data.friends.push(newFriend);
	response.render('index', data);
};