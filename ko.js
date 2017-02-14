var ViewModel = function(first, last) {
	this.firstName = ko.observable(first);
	this.lastName = ko.observable(last);
			
	this.fullName = ko.pureComputed(function(){
		return this.firstName() + " " + this.lastName();	
	}, this);
};

$(document).ready(function() {
	ko.applyBindings(new ViewModel("Bob", "Smith"));
});
