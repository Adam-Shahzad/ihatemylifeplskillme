(function () {

    var BattleController = function (pokeService) {
        vm = this;
        vm.myString = "This came from battle controller";
    };

    angular.module('pokeapp').controller('battleController', ['pokeService', BattleController]);
}());