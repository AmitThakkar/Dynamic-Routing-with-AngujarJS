/**
 * Created by Amit Thakkar on 20/04/15.
 */
(function (ng) {
    'use strict';
    ng.module('dynamicRoute')
        .controller('WizeEditController', [function () {
            var wec = this;
            wec.name = "Edit Controller";
        }])
        .controller('WiseViewController', [function () {
            var wvc = this;
            wvc.name = "View Controller";
        }]);
})(window.angular);