(function(angular){
	/* Module that formats menus of nvision prior to sending their data to the views */
	angular.module('nvision.lib.menuFormatter', [])
	.factory('MenuFormatter', MenuFormatterProvider);

	function MenuFormatterProvider(){
		
		function MenuFormatterService(){

			// This formatter function is taken by a map function
			// It sets the "value" property of the menu item
			// The "value" property is a unique identifier for the menu item
			// and is used for example to construct ui-route states for the menu item
			this.setMenuValue = function(menuItem /*, index, menu*/){
				return setRecurseMenuValue(menuItem);
			};

			// Recursively sets the "value" property of each menu item
			function setRecurseMenuValue(menuItem){
				if(objectPath.get(menuItem, 'items.length') !== 0){
					_.forEach(menuItem.items, function(item, index){
						return setRecurseMenuValue(item);
					});
				}

				menuItem.value = _.camelCase(menuItem.label);

				return menuItem;
			}
		}

		return new MenuFormatterService();
	}

})(window.angular);