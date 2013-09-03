'use strict';

describe('Filter: flickrURL', function () {

  // load the filter's module
  beforeEach(module('angularFlickrApp'));

  // initialize a new instance of the filter before each test
  var flickrURL;
  beforeEach(inject(function ($filter) {
    flickrURL = $filter('flickrURL');
  }));

});
