(function(){
'use strict';

var ToBuy = [
    {
        isim:"kurab",
        miktar:10
    },
    {
        isim:"süt",
        miktar:10
    },
    {
        isim:"yulaf",
        miktar:100
    },
    {
        isim:"sucuk",
        miktar:20
    },
    {
        isim:"yumurta",
        miktar:10
    }
]

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItems();
    console.log(ShoppingListCheckOffService.getItemsLen());
    toBuyList.removeItem = function(itemIndex){
        ShoppingListCheckOffService.addItem(toBuyList.items[itemIndex].isim,toBuyList.items[itemIndex].miktar);
        ShoppingListCheckOffService.removeItem(itemIndex);
        toBuyList.show = ShoppingListCheckOffService.lengthItems();
        //console.log(ShoppingListCheckOffService.lengthAlreadyItems());
    };
}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService','$scope'];
function AlreadyBoughtController(ShoppingListCheckOffService,$scope){
    var alreadBuy = this;

    alreadBuy.items = ShoppingListCheckOffService.getAlreadyItems();
    //console.log(alreadBuy.items.length);
    alreadBuy.show = ShoppingListCheckOffService.lengthAlreadyItems();
    $scope.man = alreadBuy.items.length;
    alreadBuy.len = ShoppingListCheckOffService.getAlreadyItemsLen();
    console.log(alreadBuy.show);
}

function ShoppingListCheckOffService(){
    var service = this;

    var items = ToBuy;
    var alreadyItems = [];

    service.addItem = function(itemName, quantity){
        var item = {
            isim: itemName,
            miktar: quantity
        };
        alreadyItems.push(item);
    };

    service.removeItem = function(itemIndex){
        items.splice(itemIndex, 1);
    };

    service.getItems = function(){
        return items;
    };

    service.getItemsLen = function(){
        return items.length;
    }

    service.getAlreadyItems = function(){
        return alreadyItems;
    }

    service.getAlreadyItemsLen = function(){
        return alreadyItems.length;
    }

    service.lengthAlreadyItems = function(){
        var alreadyItemsShow = true;
        if(alreadyItems.length > 0){
            alreadyItemsShow = false;
        }else{
            alreadyItemsShow = true;
        }
        return alreadyItemsShow;
    }
    service.lengthItems = function(){
        var ItemsShow = true;
        if(items.length > 0){
            ItemsShow = false;
        }else{
            ItemsShow = true;
        }
        return ItemsShow;
    }
}

})();