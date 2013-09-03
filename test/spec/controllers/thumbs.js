'use strict';

describe('Controller: ThumbsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFlickrApp'));

  var ThumbsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThumbsCtrl = $controller('ThumbsCtrl', {
      $scope: scope
    });
  }));

});
