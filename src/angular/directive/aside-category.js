(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxAsideCategory', [function ($scope) {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          items: '='
        },
        template: '<div class="ng-widget-tabs {{cssClass}}">' +
        '<ul class="tab-hd">' +
        '<li class="tab-hd-item" ng-repeat="item in items" data-active="{{item.selected}}">' +
        '<a href="javascript:;" ng-click="select(item)">{{item.title}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-bd" ng-transclude></div>' +
        '</div>'
      };

    }]);


})();
