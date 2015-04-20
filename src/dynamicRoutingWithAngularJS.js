/**
 * Created by Amit Thakkar on 20/04/15.
 */
(function (ng) {
    'use strict';
    ng.module('dynamicRoute', ['ngRoute'])
        .config(function ($routeProvider) {
            ng.forEach(ng.routes, function (route) {
                $routeProvider.when(route.url, route);
            });
        });
})(window.angular);