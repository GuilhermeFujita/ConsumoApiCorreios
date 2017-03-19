angular.module('starter')
.service('ConsultaService', function($http){
	var url = 'http://correiosapi.apphb.com/cep/'

	return {
		consultarCep: function(dadosConsulta){
			return $http.get(url + dadosConsulta).then(function(response){
				return response.data;
			})
		}
	}
})