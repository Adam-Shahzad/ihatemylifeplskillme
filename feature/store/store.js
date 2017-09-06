(function () {

    var StoreController = function () {
        vm = this;
        vm.myString = "This came from store controller";
    };

    angular.module('pokeapp').controller('storeController', [StoreController]);
}());