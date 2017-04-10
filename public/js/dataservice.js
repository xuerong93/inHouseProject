//dateservice.js

(function(global) {
    var ds = {};
    ds.cardService = function($q, $http) {
        // var url ="http://localhost:8080/SpringRESTDemo/rest/emp";
        var url ="http://localhost:8080/CardPool/rest/cardInfo";
        return {
            getAllCards: function() {
                var defer = $q.defer();
                $http.get(url).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getOneKindCard: function(name){
                var defer =$q.defer();
                $http.get(url + "/" + name).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getOneCardCategory: function(category){
                var defer =$q.defer();
                $http.get(url + "/category/" + category).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getSpecialCard: function(id){
                var defer =$q.defer();
                $http.get(url + "/id/" + id).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getBlurCard: function(str){
                var defer =$q.defer();
                $http.get(url + "/namelike/" + str).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            insertCard: function(emp){
                var defer = $q.defer();
                $http.post(url, emp).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },
            updateCard: function(emp) {
                var defer = $q.defer();
                $http.put(url,emp).then(function(res){
                    defer.resolve(res);
                });
                return defer.promise;
            },
            deleteCard: function(name) {
                var defer = $q.defer();
                $http.delete(url + "/" + name).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            }
        }
    }

    ds.userService = function($q, $http) {
        // var url ="http://localhost:8080/SpringRESTDemo/rest/emp";
        var url ="http://localhost:8080/CardPool/rest/signup";
        return {
            getAllUsers: function() {
                var defer = $q.defer();
                $http.get(url).then(function(res) {
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            getOneUser: function(name){
                var defer =$q.defer();
                $http.get(url + "/" + name).then(function(res) { 
                    defer.resolve(res.data);
                });
                return defer.promise;
            },
            insertUser: function(user){
                var defer = $q.defer();
                $http.post(url, user).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            },
            updateUser: function(user) {
                var defer = $q.defer();
                $http.put(url,user).then(function(res){
                    defer.resolve(user);
                });
                return defer.promise;
            },
            deleteUser: function(name) {
                var defer = $q.defer();
                $http.delete(url + "/" + name).then(function(res) {
                    defer.resolve(res);
                });
                return defer.promise;
            }
        }
    }

    ds.noConflict = function(){
        return ds;
    };

    global.ds = ds; 
})(window); 
