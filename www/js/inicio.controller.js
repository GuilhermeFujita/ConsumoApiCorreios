angular.module('starter')
.controller('InicioController', function($scope, ConsultaService, $ionicPopup){

	$scope.dados = {};
	$scope.info = {}

	$scope.consultarCep = function(){

		var dadosConsulta = $scope.dados.cep;

		ConsultaService.consultarCep(dadosConsulta).then(function(dados){
			$scope.info.cep = dados.cep;
			$scope.info.tipo = dados.tipoDeLogradouro;
			$scope.info.logradouro = dados.logradouro;
			$scope.info.cidade = dados.cidade;
			$scope.info.bairro = dados.bairro;
			$scope.info.estado = dados.estado;

		}, function(erro){
			$ionicPopup.alert({
				title: 'Ops!',
				template: 'Não foi possível carregar os dados'
			});

		})
	}
});