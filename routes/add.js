const { response } = require("express");
var data = require("../data.json");

exports.addFriend = function(request, response) {   
	
	newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
	}

	data.friends.push(newFriend);
	response.render('index', data);
};