(function () {

    var SearchController = function (pokeService) {
        vm = this;
        vm.myString = "This came from search controller";
        vm.myString2 = pokeService.getpokemon().name;

    };

    angular.module('pokeapp').controller('searchController', ['pokeService', SearchController]);
}());