angular.module('starter.controllers').controller('pedidosCtrl', pedidosCtrl)

function pedidosCtrl ($ionicModal,
                      $scope,
                      $window,
                      $state,
                      $timeout,
                      $location,
                      $cordovaSQLite) {


     $scope.grupos =[
          {
               "name": "ASEO",
               "items": [
                        {
                            name:"CUIDADO"
                         }
                         ,
                         {
                            name:"DESODORANTE"
                         },

               ]
          },
          {
             "name": "MISCELANEO",
             "items": []
          },
          {
               "name": "BEBIDAS",
               "items": [
                   {
                       name:"LICORES"
                   },
                   {
                       name:"GASEOSAS"
                   },
               ]
          },

       {
         "name": "TODOS LOS PRODUCTOS",
         "items": []
       }

         ];







     $scope.toggleGroup = function(group) {
          if ($scope.isGroupShown(group)) {
               $scope.shownGroup = null;
          } else {
               $scope.shownGroup = group;
          }
     };
     $scope.isGroupShown = function(group) {
          return $scope.shownGroup === group;
     };



    $scope.description = function($$) {
       $state.go('pedidosProductos',{"idTipoProduct":$$.name});
    };

}


