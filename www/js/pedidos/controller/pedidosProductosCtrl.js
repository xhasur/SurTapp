angular.module('starter.controllers').controller('pedidosProductosCtrl', pedidosProductosCtrl)

function pedidosProductosCtrl ($ionicModal,
                               $scope,
                               $window,
                               $state,
                               $timeout,
                               $location,
                               $cordovaSQLite ) {


    $scope.parametro= $state.params.idTipoProduct;
    $scope.pedidosProducto=[  ];
    $scope.pedidosProducto.tipoProducto=$scope.parametro;



    $scope.allImages = [

        {
            id:'2',
            src: 'img/aerosol1.png',
            nombre:"jabonLux",
            precio:"1000",
            caption:"AEROSOL TROPICAL ENERGY",
            desc:"Tropical Energy en aerosol proporciona protección duradera y mayor sensación de frescura durante todo el día"
        },
        {
            id:'4',
            src:'img/rollon1.png',
            nombre:"fruco",
            caption:"ROLL-ON TROPICAL ENERGY",
          desc:"Tropical Energy en aerosol proporciona protección duradera y mayor sensación de frescura durante todo el día"
        },
        {
            id:'5',
            src: 'img/stick1.png',
            nombre:"fruco",
            precio:"1000",
            caption:"STICK TROPICAL ENERGY",
          desc:"Tropical Energy en aerosol proporciona protección duradera y mayor sensación de frescura durante todo el día"
        }

    ];

}


