angular.module('controller.MapaLoja',[])
.controller('MapaLoja',['$scope','$stateParams', function($scope,$stateParams) {    

    var nomeUnidade = $stateParams.nomeLoja;
    var latitude    = $stateParams.latitude;
    var longitude   = $stateParams.longitude;

    $scope.telefoneLoja = $stateParams.telefone;
    
    function carregaMapa(latitude,longitude) {
       
        //var myLatlng = new google.maps.LatLng(-19.8921718,-43.9286987);
        var myLatlng = new google.maps.LatLng(latitude,longitude);
        
        var mapOptions = {
              center: myLatlng,
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        
        var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Uluru (Ayers Rock)'
        });


        var infowindow = new google.maps.InfoWindow({
             content:"Roma",
             position:myLatlng
        });

        infowindow.open(map,marker);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
        
       

        $scope.map = map;
    }
      
      google.maps.event.addDomListener(window,'load',carregaMapa);
      
      $scope.$on('$ionicView.enter', function(){ 
            carregaMapa(latitude,longitude);
      });
}])



