(function(){
"use strict";

angular.module('public')
.controller('infoController', infoController);

infoController.$inject = ['userService', 'ApiPath'];

function infoController(userService, ApiPath) {
    var $ctrl = this;

    $ctrl.user = userService.getUser();

    $ctrl.basePath = ApiPath;
}

})();
