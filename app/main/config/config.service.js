(function(angular){
/* Module that returns a service to get the application global config. 
It should be initialized before the application runs by calling .init() on it */

var configModule = angular.module('nvision.main.config', [])
	.value('config', null)
	.factory('AppConfig', [
		'$http',
		'$q',
		'HttpErrorHandler',
		'$log',
		'$timeout',
		'$window',
		'config',
		function($http, $q, HttpErrorHandler, $log, $timeout, $window, config){
			
			// This allows to use this factory as a provider in a module's config
			// It makes the service usable in a module's config
			this.$get = function(){
				return new AppConfigService();
			};

			function AppConfigService(){
	
				this.get = function(key){

					if(_.isNull(config)) {
						$log.error('No app config available. Try calling AppConfig.init.');
					}

					return objectPath.get(config, key);
				};

				// init needs to be called to set the config this service returns
				this.init = function(){

					return getConfig().then(function(mergedConfig){
						var config = formatApiRoutes(mergedConfig);
						configModule.value('config', config);
						console.log('config', config)
					}, function(err){
						$log.error(err);
					});
				};

				// Function that merges all config together
				function getConfig(){
					var deferred = $q.defer();
					var conf = {};

					getApiRoutes().then(function(res){
						if(!res.data.admMenu) HttpErrorHandler.throwError(res, 'No conf for adm menu returned');

						_.merge(conf, { apiRoutes: res.data });
						return getAppConfig();
					}).then(function(res){
						_.merge(conf, res.data);
						deferred.resolve(conf);
					}, function(err){
						// Fail callback for all chained promises
						deferred.reject(err);
					});
					
					return deferred.promise;
				}
			}

			function getAppConfig(){
				return $http.get('app/main/config/app.config.json');
			}

			function getApiRoutes(){
				return $http.get('app/main/config/api-routes.config.json');
			}

			// Function that formats the api routes to include the api endpoint
			//@completeConfig is the config object that contains all config merged
			function formatApiRoutes(completeConfig){
				_.forEach(completeConfig.apiRoutes, function(apiRoute, key){
					formatRecurseApiRoutes(apiRoute, key, completeConfig);
				});

				return completeConfig;
			}

			// Function to deep set the api routes to include the api endpoint
			// api route = conf api endpoint + conf api route
			function formatRecurseApiRoutes(current, path, completeConfig){
				if(_.isObject(current)) {
					_.forEach(current, function (value, key){
						return formatRecurseApiRoutes(value, path + '.' + key, completeConfig);
					});
				}
				else{
					objectPath.set(completeConfig.apiRoutes, path, completeConfig.apiEndpoint + current);
				}
			}

			return new AppConfigService();
	
	}]);
})(window.angular);