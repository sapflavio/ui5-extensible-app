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
			},
			
			calculateVolume: function(h,w,d){
				if(h && w && d){
					return h * w * d;
				}
				return "?";
			}
		};

	});
