(function(angular) {
  angular.module('nvision.lib.httpErrorHandler', [])
  .factory('HttpErrorHandler', function(){

  	function ErrorHandler(){
  		this.throwError = function(httpResponse, errorMessage){
  			if(!httpResponse.status) throw new Error('HttpErrorHandler: Missing Http Response Object in arguments.');
  			throw new Error('http-error-handler: '+ errorMessage + '; url: '+ httpResponse.config.url);
  		};
  	}

  	return new ErrorHandler();
  });
	
})(window.angular);