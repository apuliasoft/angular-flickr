'use strict';

describe('Controller: ZoomCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFlickrApp'));

  var ZoomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZoomCtrl = $controller('ZoomCtrl', {
      $scope: scope
    });
  }));

});
