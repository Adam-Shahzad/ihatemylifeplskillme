"use strict";

(function () {

    angular.module('pokeapp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/battle");

        $stateProvider.state("battle", {
            url: "/battle",
            templateUrl: "feature/battle/battle.html"
        }).state("search", {
            url: "/search",
            templateUrl: "feature/search/search.html"
        }).state("store", {
            url: "/store",
            templateUrl: "feature/store/store.html"
        })
    });
}());