angular.module("contact-list").filter("name", function () {
  return function (input) {
    var namesList = input.split(" ");
    var formatedNamesList = namesList.map(function (name) {
			if (/(^da$|^de$|^dos$)/.test(name.toLowerCase())) return name.toLowerCase();
			return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
		});
		return formatedNamesList.join(" ");
  }
})
