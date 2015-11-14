angular.module('starter.controllers').controller('principalCtrl', principalCtrl)

function principalCtrl ($ionicModal,
                        $scope,
                        $window,
                        $state,
                        $timeout,
                        $location,
                        $cordovaSQLite
) {

    $scope.principal = {};
    $scope.principal.varViewProductsD=false;
    $scope.principal.varViewProductso=false;

    $scope.allImagesOfertas = [

      {
        id:'2',
        src: 'img/aerosol1.png',
        nombre:"jabonLux",
        precio:"1000",
        caption:"AEROSOL TROPICAL ENERGY"
      },
      {
        id:'4',
        src:'img/rollon1.png',
        precio:"1000",
        caption:"ROLL-ON TROPICAL ENERGY"
      },
      {
        id:'5',
        src: 'img/stick1.png',
        precio:"1000",
        caption:"STICK TROPICAL ENERGY"
      },
      {
        id:'2',
        src: 'img/aerosol2.png',
        precio:"1000",
        caption:"AEROSOL TROPICAL ENERGY"
      },
      {
        id:'4',
        src:'img/rollon2.png',
        precio:"1000",
        caption:"ROLL-ON TROPICAL ENERGY"

      },
      {
        id:'5',
        src: 'img/stick2.png',
        precio:"1000",
        caption:"STICK TROPICAL ENERGY"
      },
    ];


  $scope.allImagesDestacados = [

    {
      id:'2',
      src: 'img/cotton2.png',
      precio:"1000",
      caption:"COTTON"
    },
    {
      id:'4',
      src:'img/bamboo2.png',
      precio:"1000",
      caption:"BAMBOO"

    },
    {
      id:'5',
      src: 'img/antibacterial2.png',
      precio:"1000",
      caption:"ANTIBACTERIAL"

    },
    {
      id:'2',
      src: 'img/v81.png',
      precio:"1000",
      caption:"AEROSOL TROPICAL ENERGY"
    },
    {
      id:'4',
      src:'img/quantum1.png',
      precio:"1000",
      caption:"ROLL-ON TROPICAL ENERGY"
    },
    {
      id:'5',
      src: 'img/cool1.png',
      precio:"1000",
      caption:"COOL"
    }
  ];


    $scope.hacerPedidos=function(){
      console.log("");
        $state.go('pedidos');
    }

  $scope.viewProductsD=function(){
    if( $scope.principal.varViewProductsD){
      $scope.principal.varViewProductsD=false;

    }else{
      $scope.principal.varViewProductsD=true;
    }

  }

  $scope.viewProductsO=function(){
    if( $scope.principal.varViewProductsO){
      $scope.principal.varViewProductsO=false;

    }else{
      $scope.principal.varViewProductsO=true;
    }

  }


  $scope.indicadores=function(){
    $state.go('indicadores');
  }

}


