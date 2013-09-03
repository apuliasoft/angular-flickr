'use strict';

describe('Directive: thumbnails', function () {

  // load the directive's module
  beforeEach(module('angularFlickrApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<thumbnails></thumbnails>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the thumbnails directive');
  }));
});
