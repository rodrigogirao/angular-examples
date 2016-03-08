angular.module("contact-list").factory("contactsAPI", function ($http, config) {
	var _getContacts = function () {
		return $http.get(config.baseUrl + "/contacts");
	};

	var _saveContacts = function (contacts) {
		return $http.post(config.baseUrl + "/contacts", contacts);
	};

	return {
		getContacts: _getContacts,
		saveContacts: _saveContacts
	};
});
