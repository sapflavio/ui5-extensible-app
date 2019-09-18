sap.ui.define(
	[],
	function () {
		"use strict";

		return {
			toUpperCase: function (sName) {
				if (!sName) {
					return "???";
				}
				return sName.toUpperCase();
			}
		};

	});