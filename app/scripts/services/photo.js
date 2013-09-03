'use strict';

angular.module('angularFlickrApp')
  .factory('Photo', function ($filter) {
    return {
      photo: '',
      setPhoto: function (p) {
        var filter = $filter('flickrURL');
        this.photo = filter(p, 'z');
      }
    };
  });
