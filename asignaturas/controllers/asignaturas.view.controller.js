angular.module('myApp.asignaturas')

.controller("AsignaturasViewCtrl", function($scope, $http, $routeParams, url) { // AsignaturasViewCtrl controller

    // TODO-1: Realizar Petición GET a la URL /asignaturas/{id}
        // TODO-2: En caso de éxito, guardar en $scope.detailsAsignatura el JSON devuelto
        $http.get(url + 'asignaturas/'+$routeParams.id).
        then(function(response) {
            $scope.detailsAsignatura = response.data;
        }, function(response) {
            $scope.notice = response.status + " " + response.data.error;
        });

})
