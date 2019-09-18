sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.extensible.controller.BaseController", {
		

	// formatter: formatter,
		
		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		getModel: function (sModel) {
			return this.getOwnerComponent().getModel(sModel);
		},
		
		getEventBus: function(){
			return sap.ui.getCore().getEventBus();
		},

		setModel: function (oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		getText: function (sText, aArgs) {
			return this.getModel("i18n").getResourceBundle().getText(sText, aArgs);
		}
		




	});
});
