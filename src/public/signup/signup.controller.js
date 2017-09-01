(function(){
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['userService'];

function signUpController(userService) {
    var $ctrl = this;

    $ctrl.submit = function() {
        userService.setUser($ctrl.user);
    };

    $ctrl.isUserRegistered = function() {
        if(userService.getUser()) {
            return true;
        }

        return false;
    };
}

})();
