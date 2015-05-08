var basUrl = 'http://server/rest/';
function login($scope, $http) {
    $http.get(basUrl.concat('/login')).
        success(function(data) {
            $scope.login = data;
        });
}
function register($scope, $http) {
    $http.get(basUrl.concat('/register')).
        success(function(data) {
            $scope.register = data;
        });
}
function applications($scope, $http) {
    $http.get(basUrl.concat('/applications')).
        success(function(data) {
            $scope.applications = data;
        });
}
function customizations($scope, $http) {
    $http.get(basUrl.concat('/customizations')).
        success(function(data) {
            $scope.customizations = data;
        });
}