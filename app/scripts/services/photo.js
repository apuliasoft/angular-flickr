'use strict';

angular.module('angularFlickrApp')
    .factory('Photo', function ($filter) {
        return {
            photo: "img/placeholder.jpg",
            setPhoto: function (p) {
                var filter = $filter('flickrURL');
                this.photo = filter(p, 'z');
            }
        }
    });
