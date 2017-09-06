(function () {


    var PokeService = function ($scope) {

        this.getpokemon = function () {
            console.log("this is running");
            $http.get('http://pokeapi.co/api/v2/pokeman/1/').then(function (result) {
                return $scope.pokemon = result.data;
            })
        };

    };

    angular.module('pokeapp').service('pokeService', [PokeService]);
}());