(function (ng) {
    ng.routes = [
        {
            "url": "/wize/view",
            "templateUrl": "src/wize/partials/view.html",
            "controller": "WizeViewController",
            "controllerAs": "wvc"
        },
        {
            "url": "/wize/edit",
            "templateUrl": "src/wize/partials/edit.html",
            "controller": "WizeEditController",
            "controllerAs": "wec"
        },
        {
            "url": "/assert-it/view",
            "templateUrl": "src/assert-it/partials/view.html",
            "controller": "AssertITViewController",
            "controllerAs": "aivc"
        },
        {
            "url": "/assert-it/edit",
            "templateUrl": "src/assert-it/partials/edit.html",
            "controller": "AssertITEditController",
            "controllerAs": "aiec"
        }
    ];
})(window.angular);