angular.module('controller.Avaliacao',[])
.controller('Avaliacao',['$scope','$cordovaSQLite', function($scope,$cordovaSQLite) {
	
    $scope.form = {};

    $scope.$on('$ionicView.enter', function(){

        $cordovaSQLite.execute(db,'SELECT *FROM Cliente')
            .then(function(res) {
                    if (res.rows.length > 0) 
                    {
                        $scope.form.nome      = res.rows.item(0).Nome;
                        $scope.form.email     = res.rows.item(0).Email;
                        $scope.form.telefone  = res.rows.item(0).Telefone; 
                        $scope.form.celular   = res.rows.item(0).Celular;
                        $scope.form.cidade    = res.rows.item(0).Cidade;
                        $scope.form.estado    = res.rows.item(0).UF;
                    }
                },
                function(error) {
                    //$scope.statusMessage = "Error on loading: " + error.message;
            });
    });
}])




