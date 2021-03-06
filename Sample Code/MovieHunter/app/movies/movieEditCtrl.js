﻿(function () {
    "use strict";

    angular
        .module("movieHunter")
        .controller("MovieEditCtrl",
                    ["movieResource",
                        "$routeParams",
                     MovieEditCtrl]);

    function MovieEditCtrl(movieResource, $routeParams) {
        var vm = this;

        vm.movie = "";
        vm.title = "";
        vm.message = "";

        movieResource.get({ movieId: $routeParams.movieId },
            function (data) {
                vm.movie = data;

                if (vm.movie.movieId) {
                    vm.title = vm.movie.title;
                }
                else {
                    vm.title = "New Movie";
                }
            });

        vm.submit = function (isValid) {
            if (isValid) {
                vm.movie.$save(function (data) {
                    vm.message = "Save successful.";
                });
            } else {
                vm.message = "Please correct the validation errors and try saving again.";
            }
        };

        // When using ng-model-options
        //vm.cancelEntry = function (control, event) {
        //    if (event.keyCode == 27) {
        //        control.$rollbackViewValue();  
        //    }
        //};
    }
}());