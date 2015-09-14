angular.module('controller.DadosPessoais',[])
.controller('DadosPessoaisCtrl',['$scope','$cordovaSQLite',function($scope,$cordovaSQLite) {
   
  	//http://www.gajotres.net/ionic-framework-tutorial-8-page-navigation/
  	//https://github.com/candreoliveira/ngMask
  	$scope.form = {};

    var clienteCadastrado = false;

    $scope.$on('$ionicView.enter', function(){   


      $cordovaSQLite.execute(db,'SELECT *FROM Cliente')
            .then(
                function(res) {
                    if (res.rows.length > 0) 
                    {
                        $scope.form.nome      = res.rows.item(0).Nome;
                        $scope.form.email     = res.rows.item(0).Email;
                        $scope.form.telefone  = res.rows.item(0).Telefone; 
                        $scope.form.celular   = res.rows.item(0).Celular;
                        $scope.form.cidade    = res.rows.item(0).Cidade;
                        $scope.form.estado    = res.rows.item(0).UF;
                        clienteCadastrado     = true;
                    }
                },
                function(error) {
                    //$scope.statusMessage = "Error on loading: " + error.message;
                });
    }); 
            
    
    $scope.salvarDados = function() {
  		
  		    var nomeCliente         = $scope.form.nome ;
        	var emailCliente        = $scope.form.email ;
        	var telefoneCliente     = $scope.form.telefone; 
        	var celularCliente      = $scope.form.celular;
        	var cidadeCliente       = $scope.form.cidade;
        	var estadoCliente       = $scope.form.estado;
          
          if(!clienteCadastrado)
          {
              $cordovaSQLite.execute(db,'INSERT INTO Cliente (Nome,Email,Telefone,Celular,Cidade,UF) VALUES (?,?,?,?,?,?)',[nomeCliente,emailCliente,telefoneCliente,celularCliente,cidadeCliente,estadoCliente])

              .then(function(result){
                  //$scope.statusMessage = "Message saved successful, cheers!";
                  alert('Salvo com sucesso');
              }, function(error) {
                  //$scope.statusMessage = "Error on saving: " + error.message;
                  alert('Erro ao salvar ' + error.message);
              });

          }
          else
          {

              $cordovaSQLite.execute(db,'UPDATE Cliente SET Nome = ?, Email = ?,Telefone = ?,Celular = ?,Cidade = ?,UF = ? ',[nomeCliente,emailCliente,telefoneCliente,celularCliente,cidadeCliente,estadoCliente])

              .then(function(result){
                  //$scope.statusMessage = "Message saved successful, cheers!";
                  alert('Atualizado com sucesso');
                  $scope.apply();
              }, function(error) {
                  //$scope.statusMessage = "Error on saving: " + error.message;
                  alert('Erro ao atualizar ' + error.message);
              });



          }

       
    }

}])


