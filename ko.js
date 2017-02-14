var ViewModel = function(first, last, img) {
	this.firstName = ko.observable(first);
	this.lastName = ko.observable(last);
	/*this.imgSrc = ko.observable(img);

	this.pcImg = ko.pureComputed(function(){
		return "./assets/" + this.imgSrc();
	}, this);*/
			
	this.fullName = ko.pureComputed(function(){
		return this.firstName() + " " + this.lastName();	
	}, this);

};

$(document).ready(function() {
	ko.applyBindings(new ViewModel("Bob", "Smith", "0.JPG"));
});
