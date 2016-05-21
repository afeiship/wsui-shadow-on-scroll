#angular-aside-category
AngularJS directive for aside category.

##usage:
+ bower install `afeiship/angular-aside-category` --save
+ html part:
```html
<nx-aside-category items="vm.items" active-index="vm.activeIndex">
</nx-aside-category>
```

+ javascript part:
```javascript
var TestModule = angular.module('TestApp', ['nx.widget'])
    .controller('MainCtrl', function ($scope) {
      var vm = this;

      vm.items = _generateItems();
      vm.activeIndex = 0;


      $scope.$watch(function(){
        return vm.activeIndex;
      },function(inIndex){
        console.log('activeItem',vm.items[inIndex]);
      });

      function _generateItems() {
        var result = [];
        for (var i = 0; i < 40; i++) {
          result.push({
            id: i,
            name: '分类XX' + i
          });
        }
        return result;
      }

    });
```

##demo:
+ https://github.com/afeiship/angular-aside-category/blob/master/test/test.html
