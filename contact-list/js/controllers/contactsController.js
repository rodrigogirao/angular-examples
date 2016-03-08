angular.module("contact-list").controller("contactsController", function ($scope, contactsAPI, companiesAPI, colorsAPI) {
  $scope.app = "Lista Telefônica";
  $scope.contacts = [];
  $scope.companies = [];
  $scope.colors = [];
  var loadContacts = function () {
    contactsAPI.getContacts().success(function (data) {
      $scope.contacts = data;
    }).error(function (data, status) {
      $scope.message = "Aconteceu um problema: " + data;
    });
  };
  var loadCompanies = function () {
    companiesAPI.getCompanies().success(function (data) {
      $scope.companies = data;
    });
  };
  var loadColors = function () {
    colorsAPI.getColors().success(function (data) {
      $scope.colors = data;
    });
  };
  $scope.addContact = function(contact){
    contact.phone = '(' + contact.company.code + ') ' + contact.phone;
    contact.date = new Date();
    contactsAPI.saveContacts(contact).success(function (data) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadContacts();
    });
  };
  $scope.deleteContact = function(contacts) {
    var newContacts = contacts.filter(function (contact) {
      if (!contact.selected) return contact;
    });
    contactsAPI.saveContacts(newContacts).success(function (data) {
      $scope.contacts = newContacts;
    });

  };
  $scope.isSomeSelected = function(contacts) {
    return contacts.some(function(contact) {
      return contact.selected;
    })
  };
  $scope.orderBy = function (field) {
    $scope.orderField = field;
    $scope.orderDirection = !$scope.orderDirection;
  };

  loadContacts();
  loadCompanies();
  loadColors();
});
