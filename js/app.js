( function ()
	{
		var app = angular.module ("gemStore", []);

		app.controller ("StoreController", function () {

			this.product = gem;

		});

		var gem = { price: "500.00",
					name: "Ruby",
					color: "Red",
					canPurchase: true

		}

	})();