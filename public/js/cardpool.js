var app = angular.module("mainApp",["ngRoute","ui.router"]);

// "ShoppingCart", "CartItem",                , ShoppingCart, CartItem
app.controller("mainCtrl",["$scope", "cs", "$location", "$timeout", "ShoppingCart", "$rootScope",  function($scope, cs, $location,$timeout, ShoppingCart, $rootScope){
    console.log("This is cardpool website");
    console.log($location.search());
    // $scope.username = $rootScope.user? $rootScope.user: $location.search().username ;
    $scope.username = $location.search().username ;
    $scope.usernamegetter = function(){
        return $rootScope.user;
    }
    console.log($scope.username);
    // $scope.isLoggedIn = function(){
    //     if($scope.username){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // };
    cs.getAllCards().then(function(data) {
        $scope.cardList = data;
        console.log(data);
        console.log(data.length);
        console.log(typeof data);
    });


    $scope.showDropdown = false;
    // $scope.onMouseEnter=function(){
    //     angular.element(document.querySelector('#top-selling-brands-container')).toggleClass('is-active');
    //     $scope.showDropdown=true;
    // };
    $scope.onFocus=function(){
        angular.element(document.querySelector('#top-selling-brands-container')).toggleClass('is-active');
        $scope.showDropdown=true;
    };
    $scope.onMouseLeft=function(){
        $scope.showDropdown=false;
        angular.element(document.querySelector('#top-selling-brands-container')).toggleClass('is-active','false');
    };
    $scope.clickFunction=function(){
        $scope.showDropdown=false;
    }

    //ng-click set timeout
    // $scope.AccountDropdown=false;
    // $scope.accountDropdown = function(){
    //     $scope.AccountDropdown = true;
    //     $timeout( function(){
    //         $scope.AccountDropdown=false;
    //     }, 2000 );
    //     //time
    //     $scope.time = 0;
        
    //     //timer callback
    //     var timer = function() {
    //         if( $scope.time < 2000 ) {
    //             $scope.time += 1000;
    //             $timeout(timer, 1000);
    //         }
    //     }
        
    //     //run!!
    //     $timeout(timer, 1000);  
    // }
    $scope.shoppingcart=ShoppingCart;
    console.log("Here is main ctrl and the shopping cart contains");
    console.log($scope.shoppingcart.$cart.items);
    // $scope.cartIsValid= $scope.shoppingcart.length>0? true:false;

    $scope.closedCart = true;
    $scope.openAndCloseCartSlider=function(){
        var toClose = angular.element(document.querySelector('#cart-wrap'));
        var mainPage = angular.element(document.querySelector('body'));
        if($scope.closedCart) {
            toClose.css('width','270px');
            mainPage.css('margin-left','-270px');
        }else{
            toClose.css('width','0px');
            mainPage.css('margin-left','0px');
        }
        $scope.closedCart = !$scope.closedCart;
    }
    $scope.CloseCartSlider=function(){
        var toClose = angular.element(document.querySelector('#cart-wrap'));
        var mainPage = angular.element(document.querySelector('body'));
        toClose.css('width','270px');
        mainPage.css('margin-left','-270px');
    }

    
    // $scope.openLogin=function(){
    //     var toOpen = angular.element(document.querySelector('#loginPage'));
    //     toOpen.css('width','100%');  
    // }
    // $scope.closeLogin=function(){
    //     var toClose = angular.element(document.querySelector('#loginPage'));
    //     toClose.css('width','0');  
    // }
}]);

 // use ui-router
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "template/home.html",
        controller: "homeCtrl"
    }).state("buy-gift-cards", {
        url: "/buy-gift-cards",
        templateUrl: "template/buy-gift-cards.html",
        controller: "buyGiftCardsCtrl"
    }).state("buy-gift-cards.index",{
        url: "/",
        templateUrl: "template/buy-gift-cards-default.html"
    }).state("buy-gift-cards.categories",{
        url: "/categories",
        templateUrl: "template/categories.html"
    }).state("sell-gift-cards", {
        url: "/sell-gift-cards",
        templateUrl: "template/sell-gift-cards.html",
        controller: "sellGiftCardsCtrl"
    }).state("card",{
        url: "/buy-gift-cards/:cardname",
        templateUrl: "template/singlecard.html",
        controller: "singleCardCtrl"
    }).state("account",{
        url: "/account",
        templateUrl: "template/account.html",
        controller: "accountCtrl"
    }).state("account.overview",{
        url: "/overview",
        templateUrl: "template/overview.html"
    }).state("account.purchases",{
        url: "/purchases",
        templateUrl: "template/purchases.html"
    }).state("account.listings",{
        url: "/listings",
        templateUrl: "template/listings.html"
    }).state("account.profile",{
        url: "/profile",
        templateUrl: "template/profile.html"
    }).state("account.settings",{
        url: "/settings",
        templateUrl: "template/settings.html"
    }).state("checkout", {
        url: "/checkout",
        templateUrl: "template/checkout.html"
    }).state("login",{
        url: "/login",
        templateUrl: "template/login.html"
    }).state("signup",{
        url: "/signup",
        templateUrl: "template/signup.html",
        controller: "signupCtrl"
    });


    // state("shoppingcart", {
    //     url: "/shoppingcart",
    //     templateUrl: "template/shoppingcart.html",
    //     controller: "mainCtrl"
    // })
}]);


app.factory("cs", ["$q","$http", ds.cardService]);
app.factory("us", ["$q","$http", ds.userService]);

app.controller("homeCtrl", ["$scope", function($scope){
    console.log("home page now");

}]);
app.controller("buyGiftCardsCtrl", ["$scope", "cs", "$location","$state", function($scope, cs, $location, $state){
    $state.transitionTo('buy-gift-cards.index');
    console.log("buy page now");
    // cs.getAllCards().then(function(data) {
    //     $scope.cardList = data;
    //     console.log(data);
    //     console.log(typeof data);
    // });
    // cs.getAllCards().then(function(data) {
    //     $scope.cardList = data;
    //     console.log(data);
    //     console.log(typeof data);
    //     defer.resolve(data);
    // });

    $scope.categoryListShow=['Department Stores','Home and Garden','Restaurants',
    'Computers and Electronics','Baby, Kids and Toys','Sports and Outdoors',
    'Books and Games','Movies and Entertainment', 'Clothing, Shoes and Jewelry',
    'Health and Beauty'];
    $scope.categoryListHide=['Office Supplies', 'Automotive', 'Hotels and Travel', 
    'Housewares and Appliances', 'Arts and Activities', 'Food and Grocery', 'Pets'];
    $scope.alphaList=['#','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    $scope.type='All';
    $scope.category = 'All';
    $scope.alpha = '#';
    $scope.selectTypeFilter = function(key) {
        $scope.type=key;
    };
    $scope.selectCategoryFilter = function(key) {
        $scope.category=key;
    };
    $scope.selectAlphaFilter = function(key) {
        $scope.alpha=key;
    };

    $scope.curPage=0;
    $scope.pageSize=8; 
    // $scope.showData = function() {
    //     defer.promise.then(function(data) {
    //         $scope.curPage=0;
    //         $scope.pageSize=8;
    //         var len = Object.keys(data).length;
    //         $scope.numberOfPages = function(){
    //             return Math.ceil(len / $scope.pageSize);
    //         };
    //     });
        
    // };
    // $scope.setLength = function(l){
    //     $scope.len = l;
    // }
}]);
app.controller("sellGiftCardsCtrl", ["$scope", function($scope){
    console.log("sell page now");
}]);
app.controller("singleCardCtrl",["$scope","$stateParams", "cs","ShoppingCart", function($scope, $stateParams, cs, ShoppingCart){
    console.log("card page now");
    $scope.cardname = $stateParams.cardname;
    console.log($scope.cardname);
    //to get the card name and description
    cs.getOneKindCard($scope.cardname).then(function(data) {
        $scope.cardList2 = data;
        console.log(data);
        console.log(typeof data + " in card");
        $scope.card = data[0];
        console.log($scope.card.img);

        //similar items part
        cs.getOneCardCategory($scope.card.category).then(function(data) {
            $scope.cardCategoryList = data;
            console.log(data);
        });
    });

    //add to shopping cart part
    $scope.buyNow=function(id) {
        $scope.CloseCartSlider();
        $scope.item = {
            id: id,
            name: "",
            price: 0,
            discount: 0.0,
            quantity: 1,
            type: "",
            img: ""
        };
        cs.getSpecialCard(id).then(function(data) {
            console.log(data);
            $scope.item.name = data.name;
            $scope.item.price = data.price;
            $scope.item.discount = data.discount;
            $scope.item.type = data.type;
            $scope.item.img = data.img;
            ShoppingCart.pushToCart($scope.item);
            console.log("shopping carts are "  );
            console.log(ShoppingCart.$cart.items);
        });
        
    };


    //singleCard filter part
    $scope.type='All';
    $scope.selectTypeFilter = function(key) {
        $scope.type=key;
    };

    $scope.sortCol = "price"; //定义变量来排序
    $scope.reverse=false;
    $scope.changeSortCol = function(col){
        $scope.sortCol = col;
        $scope.reverse=!$scope.reverse;
    };

    $scope.price1 = 2;
    $scope.price2 = 1000;
}]);
app.controller("accountCtrl",["$scope", "$state", function($scope, $state){
    console.log("account page now");
    $state.transitionTo('account.overview');
}]);

app.controller("signupCtrl", ["$scope", "$rootScope", "us", "$location", function($scope, $rootScope, us, $location) {
    $scope.showPassword=false;
    $scope.togglePassword=function(){
        if(!$scope.showPassword){
            angular.element(document.querySelector("#ShowPassword")).attr("type","text");
            $scope.showPassword=!$scope.showPassword;
        }else{
            angular.element(document.querySelector("#ShowPassword")).attr("type","password");
            $scope.showPassword=!$scope.showPassword;
        } 
    };

    $scope.showPassword2=false;
    $scope.togglePassword2=function(){
        if(!$scope.showPassword2){
            angular.element(document.querySelector("#ShowPassword2")).attr("type","text");
            $scope.showPassword2=!$scope.showPassword2;
        }else{
            angular.element(document.querySelector("#ShowPassword2")).attr("type","password");
            $scope.showPassword2=!$scope.showPassword2;
        } 
    };

    $scope.createAccount=function(){
        us.insertUser($scope.user).then(function(resp){
            $rootScope.user = resp.data.username;
            $location.path(resp.data.address);
            console.log("submit");
        });
        console.log("submit2");
    };
}]);

app.filter("reverse", function() {
    return function(str){
        return str.split("").reverse().join("");
    }
});
app.filter("typeFilter", function() {
    return function(items, type){
        var filtered = [];
        angular.forEach(items, function(item) {
            if(type=="All"){
                filtered.push(item);
            }else if(type==item.type) filtered.push(item);
        });
        return filtered;
    }
});
app.filter("singleFilter", function() {
    return function(items){
        var filtered = [];
        var map = {};
        angular.forEach(items, function(item) {
            if(!map[item.name]){
                filtered.push(item);
                map[item.name]=item;
            }
        });
        return filtered;
    }
});
app.filter("categoryFilter", function() {
    return function(items, category) {
        var filtered= [];
        angular.forEach(items, function(item){
            if(category=="All"){
                filtered.push(item);
            }else if(category==item.category) filtered.push(item);
        });

        return filtered;
    }
});
app.filter("alphaFilter", function() {
    return function(items, alpha) {
        var filtered= [];
        angular.forEach(items, function(item){
            if(alpha=='#'){
                filtered.push(item);
            }else if(alpha==item.name.charAt(0)) filtered.push(item);
        });

        return filtered;
    }
});
app.filter("lenFilter", function(){
    return function(items, getl) {
        getl.len = items.length;
        return items;

    }
});

app.filter("priceFilter", function(){
    return function(items, price1, price2){
        var filtered = [];
        // collection, function
        angular.forEach(items, function(item){
            if(item.price>=price1 && item.price<=price2) filtered.push(item);
        });
        return filtered;
    };
});

// app.filter('pagination', function() {
//     return function(input, start){
//         start = +start;
//         return input.slice(start);
//     };
// });

app.service('ShoppingCart', ['$rootScope', '$window', 'CartItem', function ($rootScope,  $window, CartItem) {

    this.$cart = {
            // shipping : null,
            // taxRate : null,
            // tax : null,
            items : [],

    };

    this.pushToCart = function (item) {
        this.$cart.items.push(new CartItem(item));
        $rootScope.$broadcast('Cart:itemAdded', item);
        $rootScope.$broadcast('Cart:change', {});
    };

    this.getItemById = function (itemId) {
        var items = this.getCart().items;
        var build = false;

        angular.forEach(items, function (item) {
            if  (item.getId() === itemId) {
                build = item;
            }
        });
        return build;
    };

    // this.setShipping = function(shipping){
    //     this.$cart.shipping = shipping;
    //     return this.getShipping();
    // };

    // this.getShipping = function(){
    //     if (this.getCart().items.length == 0) return 0;
    //     return  this.getCart().shipping;
    // };

    // this.setTaxRate = function(taxRate){
    //     this.$cart.taxRate = +parseFloat(taxRate).toFixed(2);
    //     return this.getTaxRate();
    // };

    // this.getTaxRate = function(){
    //     return this.$cart.taxRate
    // };

    // this.getTax = function(){
    //     return +parseFloat(((this.getSubTotal()/100) * this.getCart().taxRate )).toFixed(2);
    // };

    this.setCart = function (cart) {
        this.$cart = cart;
        return this.getCart();
    };

    this.getCart = function(){
        return this.$cart;
    };

    this.getItems = function(){
        return this.getCart().items;
    };

    this.getTotalItems = function () {
        var count = 0;
        var items = this.getItems();
        angular.forEach(items, function (item) {
            count += item.getQuantity();
        });
        return count;
    };

    this.getTotalUniqueItems = function () {
        return this.getCart().items.length;
    };

    this.getOriginalTotal = function(){
        var total = 0;
        angular.forEach(this.getCart().items, function (item) {
            total += item.getOriginalTotal();
        });
        return +parseFloat(total).toFixed(2);
    };

    this.getActualTotal = function () {
        var total = 0;
        angular.forEach(this.getCart().items, function (item) {
            total += item.getActualTotal();
        });
        return +parseFloat(total).toFixed(2);
    };

    this.savings = function() {
        return this.getOriginalTotal()-this.getActualTotal();
    };

    this.removeItem = function (index) {
        var item = this.$cart.items.splice(index, 1)[0] || {};
        $rootScope.$broadcast('Cart:itemRemoved', item);
        $rootScope.$broadcast('Cart:change', {});

    };

    this.removeItemById = function (id) {
        var item;
        var cart = this.getCart();
        angular.forEach(cart.items, function (item, index) {
            if(item.getId() === id) {
                item = cart.items.splice(index, 1)[0] || {};
            }
        });
        this.setCart(cart);
        $rootScope.$broadcast('Cart:itemRemoved', item);
        $rootScope.$broadcast('Cart:change', {});
    };

    this.empty = function () {
        
        $rootScope.$broadcast('Cart:change', {});
        this.$cart.items = [];
        $window.localStorage.removeItem('cart');
    };
    
    this.isEmpty = function () {
        
        return (this.$cart.items.length > 0 ? false : true);
        
    };

    this.toObject = function() {

        if (this.getItems().length === 0) return false;

        var items = [];
        angular.forEach(this.getItems(), function(item){
            items.push (item.toObject());
        });

        return {
            // shipping: this.getShipping(),
            // tax: this.getTax(),
            // taxRate: this.getTaxRate(),
            subTotal: this.getSubTotal(),
            totalCost: this.totalCost(),
            items:items
        }
    };


    this.$restore = function(storedCart){
        var _self = this;
        _self.init();
        _self.$cart.shipping = storedCart.shipping;
        _self.$cart.tax = storedCart.tax;

        angular.forEach(storedCart.items, function (item) {
            _self.$cart.items.push(new CartItem(item));
        });
        this.$save();
    };

    this.$save = function () {
        return store.set('cart', JSON.stringify(this.getCart()));
    }

}]);

app.factory('CartItem', ['$log', function ($log) {

    var item = function (item) {
        this.setId(item.id);
        this.setName(item.name);
        this.setPrice(item.price);
        this.setDiscount(item.discount);
        this.setQuantity(item.quantity);
        this.setType(item.type);
        this.setImg(item.img);
    };

    item.prototype.setId = function(id){
        if (id)  this._id = id;
        else {
            $log.error('An ID must be provided');
        }
    };

    item.prototype.getId = function(){
        return this._id;
    };

    item.prototype.setName = function(name){
        if (name)  this._name = name;
        else {
            $log.error('A name must be provided');
        }
    };
    item.prototype.getName = function(){
        return this._name;
    };

    item.prototype.setPrice = function(price){
        var priceFloat = parseFloat(price);
        if (priceFloat) {
            if (priceFloat <= 0) {
                $log.error('A price must be over 0');
            } else {
                this._price = (priceFloat);
            }
        } else {
            $log.error('A price must be provided');
        }
    };
    item.prototype.getPrice = function(){
        return this._price;
    };

    item.prototype.setDiscount = function(discount){
        var discountFloat = parseFloat(discount);
        if (discountFloat) {
            if (discountFloat <= 0) {
                $log.error('A discount must be over 0');
            } else {
                this._discount = (discountFloat);
            }
        } else {
            $log.error('A discount must be provided');
        }
    };
    item.prototype.getDiscount = function(){
        return this._discount;
    };

    item.prototype.setQuantity = function(quantity, relative){
        var quantityInt = parseInt(quantity);
        if (quantityInt % 1 === 0){
            if (relative === true){
                this._quantity  += quantityInt;
            } else {
                this._quantity = quantityInt;
            }
            if (this._quantity < 1) this._quantity = 1;

        } else {
            this._quantity = 1;
            $log.info('Quantity must be an integer and was defaulted to 1');
        }
    };

    item.prototype.getQuantity = function(){
        return this._quantity;
    };

    item.prototype.setType = function(type){
        if (type) this._type=type;
        else $log.err('This item has no type');
    };

    item.prototype.getType = function(){
        return this._type;
    };

    item.prototype.setImg = function(img){
        if (img) this._img=img;
        else $log.err('This item has no img url');
    };

    item.prototype.getImg = function(){
        return this._img;
    };

    item.prototype.getOriginalTotal = function(){
        return +parseFloat(this.getQuantity() * this.getPrice()).toFixed(2);
    };

    item.prototype.getActualTotal = function(){
        return +parseFloat(this.getQuantity() * (this.getPrice()*(1-this.getDiscount()/100))).toFixed(2);
    };

    item.prototype.toObject = function() {
        return {
            id: this.getId(),
            name: this.getName(),
            price: this.getPrice(),
            discount: this.getDiscount(),
            quantity: this.getQuantity(),
            type: this.getType(),
            img: this.getImg(),
            total: this.getTotal()
        }
    };

    return item;

}]);


