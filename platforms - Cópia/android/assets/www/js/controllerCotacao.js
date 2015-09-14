angular.module('controller.Cotacao',[])
.controller('Cotacao',['$scope','$cordovaSQLite', function($scope,$cordovaSQLite) {
	
    $scope.form = {};

    $scope.$on('$ionicView.enter', function(){

        $cordovaSQLite.execute(db,'SELECT *FROM Cliente')
            .then(function(res) {
                    if (res.rows.length > 0) 
                    {
                        $scope.form.nome      = res.rows.item(0).Nome;
                        $scope.form.email     = res.rows.item(0).Email;
                        $scope.form.telefone  = res.rows.item(0).Telefone; 
                        
                       
                    }
                },
                function(error) {
                    //$scope.statusMessage = "Error on loading: " + error.message;
            });
    });
}])




