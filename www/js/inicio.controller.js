angular.module('starter')
.controller('InicioController', function($scope, ConsultaService){

	$scope.dados = {};

	$scope.consultarCep = function(){

		var dadosConsulta = {
			params: {
				cep: $scope.dados.cep
			}

		}

		ConsultaService.consultarCep(dadosConsulta).then(function(dados){
			console.log(dados)

		}, function(erro){
			console.log(erro);
		})
	}
});