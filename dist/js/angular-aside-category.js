(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxAsideCategory', [function ($scope) {
      return {
        restrict: 'E',
        scope: {
          cssClass: '@',
          items: '=',
          activeIndex: '='
        },
        template: '<nx-active-items active-index="activeIndex" css-class="nx-widget-aside-category {{cssClass}}" items="items">' +
        '<nx-active-item ng-click="scrollIntoView()" ng-repeat="item in items track by $index">{{item.name}} <b class="badge">{{item.count}}</b></nx-active-item>' +
        '</nx-active-items>',
        link: function (scope, element) {
          var activeElement;
          scope.scrollIntoView = function () {
            activeElement = element[0].querySelector('[data-active=true]');
            _scrollTo(element[0], _offset(activeElement).top + element[0].scrollTop, 400);
          };
        }
      };

    }]);


  /*private*/
  function _offset(inElement) {
    return inElement && inElement.getBoundingClientRect();
  }

  /*private*/
  function _scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop == to) return;
      _scrollTo(element, to, duration - 10);
    }, 10);
  }


})();
