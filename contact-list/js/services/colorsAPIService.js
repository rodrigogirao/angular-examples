angular.module("contact-list").service("colorsAPI", function ($http, config) {
  this.getColors = function () {
    return $http.get(config.baseUrl + "/colors");
  }
});
