/**
 * Created by Amit Thakkar on 20/04/15.
 */
(function (ng) {
    'use strict';
    ng.module('dynamicRoute')
        .controller('AssertITEditController', [function () {
            var aiec = this;
            aiec.name = "AssertIT Edit Controller";
        }])
        .controller('AssertITViewController', [function () {
            var aivc = this;
            aivc.name = "AssertIT View Controller";
        }]);
})(window.angular);