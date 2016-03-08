angular.module("contact-list").factory("contactsAPI", function ($http, config) {
	var _getContacts = function () {
		return $http.get(config.baseUrl + "/contacts");
	};

	var _saveContacts = function (conacts) {
		return $http.post(config.baseUrl + "/contacts", contacs);
	};

	return {
		getContacts: _getContacts,
		saveContacts: _saveContacts
	};
});
