//dateservice.js

(function(global) {
    var us = {};
    us.userService = function($q, $http) {
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
    us.noConflict = function(){
        return us;
    };

    global.us = us; 
})(window); 
