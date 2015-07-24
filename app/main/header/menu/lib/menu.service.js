(function(angular){
	angular.module('nvision.main.header.menuService', ['ngResource'])
	.factory('HeaderMenuService', ['$resource', '$q', 'AppConfig', 'MenuFormatter', HeaderMenuServiceProvider]);

	function HeaderMenuServiceProvider($resource, $q, AppConfig, MenuFormatter){
		var apiRoutes = AppConfig.get('apiRoutes.headerMenu');

		function HeaderMenuService(){
			this.get = function(){
				var deferred = $q.defer();

				$resource(apiRoutes.getHeaderMenu).get(function(res){
					var menu = _.chain(res.data)
						.map(MenuFormatter.setMenuValue)
				        .value();

				    deferred.resolve(menu);
				}, function(err){
					deferred.reject(err);
				});

				return deferred.promise;
			};
		}

		return new HeaderMenuService();
	}

})(window.angular);