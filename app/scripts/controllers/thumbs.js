'use strict';

angular.module('angularFlickrApp')
  .controller('ThumbsCtrl', function ($scope, $resource, Photo) {
    $scope.flickr = $resource('http://api.flickr.com/services/rest/',
      {
        'api_key': '1ee7d9480b4f9234f9e4cd34585f5c44',
        method: 'flickr.photos.search',
        format: 'json',
        'per_page': 12,
        tags: 'angularjs',
        jsoncallback: 'JSON_CALLBACK'
      },
      {
        get: {method: 'JSONP'}
      });

    $scope.doSearch = function() {
      $scope.loading = true;
      $scope.photos = $scope.flickr.get({tags: $scope.search},
        function () {
          $scope.loading = false;
        },
        function () {
          $scope.loading = false;
        });
    };

    $scope.setCurrentPhoto = function(photo) {
      Photo.setPhoto(photo);
    };
  });