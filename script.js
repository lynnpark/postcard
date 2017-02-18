
var currentPic = '0';

function send(){ 
	var canvas = document.getElementById("pc");
	var content = canvas.toDataURL().substr(22);

	emailjs.send("gmail","postcard",{
  		to_email: "sulin.park@uconn.edu", 
  		from_name: "jini",
  		content: content
	}).then(function(response) {
		alert("Postcard sent!");
	}, function(error) {
		console.log("Failed", error);
	});
}

function changepic(num){
	var src = './assets/' + num + '.JPG';
	$('#pic').attr('src', src);
	currentPic = num;
}

$(document).ready(function() {
	emailjs.init("user_3102gl1UJH4rds6wrtTHK");
});
