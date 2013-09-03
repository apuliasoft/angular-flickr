'use strict';

angular.module('angularFlickrApp')
  .directive('thumbnails', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/thumbnails.html',
      replace: true,
      scope: {
        photos: '=',
        loading: '=',
        link: '&'
      }
    };
  });
