'use strict';

describe('Filter: flickrURL', function () {

  // load the filter's module
  beforeEach(module('angularFlickrApp'));

  // initialize a new instance of the filter before each test
  var flickrURL;
  beforeEach(inject(function ($filter) {
    flickrURL = $filter('flickrURL');
  }));

  it('should return the input prefixed with "flickrURL filter:"', function () {
    var text = 'angularjs';
    expect(flickrURL(text)).toBe('flickrURL filter: ' + text);
  });

});
