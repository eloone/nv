(function(angular) {
angular.module('nvision.components.tradeMonitoring.tradeActivityService', ['ngResource'])
  .factory('TradeActivity', ['$resource',
    function($resource){
      return $resource('mocks/trades.json', {}, {
        'get': {
	            method: 'GET',
	            isArray: true
        	}
    	});
    }]
  );
	
})(window.angular);