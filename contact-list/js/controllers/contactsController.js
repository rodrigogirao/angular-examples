angular.module("contact-list").controller("contactsController", function ($scope, $http) {
  $scope.app = "Lista Telefônica";
  $scope.contacts = [];
  $scope.companies = [];
  $scope.colors = [];
  var loadContacts = function () {
    $http.get("http://localhost:3412/contacts").success(function (data) {
      $scope.contacts = data;
    }).error(function (data, status) {
      $scope.message = "Aconteceu um problema: " + data;
    });
  };
  var loadCompanies = function () {
    $http.get("http://localhost:3412/companies").success(function (data) {
      $scope.companies = data;
    });
  };
  var loadColors = function () {
    $http.get("http://localhost:3412/colors").success(function (data) {
      $scope.colors = data;
    });
  };
  $scope.addContact = function(contact){
    contact.phone = '(' + contact.company.code + ') ' + contact.phone;
    contact.date = new Date();
    $http.post("http://localhost:3412/contacts", contact).success(function (data) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadContacts();
    });
  };
  $scope.deleteContact = function(contacts) {
    var newContacts = contacts.filter(function (contact) {
      if (!contact.selected) return contact;
    });
    console.log(newContacts);
    $http.post("http://localhost:3412/contacts", newContacts).success(function (data) {
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
