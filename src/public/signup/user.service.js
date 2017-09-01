(function(){
"use strict";

angular.module('public')
.service('userService', userService);

userService.$inject = ['MenuService']
function userService(MenuService) {
    var service = this;

    var user = false;

    service.setUser = function(obj) {
      user = obj;
      MenuService.getMenuItems().then(function(response) {
          response.menu_items.forEach(function(element, idx) {
              if(element.short_name == user.favouritedish) {
                  user.favouritedish = element;
              }
          });
      });

    }

    service.getUser = function() {
      return user;
    }
}

})();
