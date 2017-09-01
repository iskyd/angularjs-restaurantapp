(function(){
"use strict";

angular.module('public')
.controller('signUpController', signUpController);

function signUpController() {
    var $ctrl = this;
    $ctrl.isRegistered = false;
    
    $ctrl.submit = function() {
        $ctrl.isRegistered = true;
    };
}

})();