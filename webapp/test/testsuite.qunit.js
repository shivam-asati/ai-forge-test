sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: pin_test_1",
		defaults: {
			page: "ui5://test-resources/pin_test_1/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "pin_test_1/",
				never: "test-resources/pin_test_1/"
			},
			loader: {
				paths: {
					"pin_test_1": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for pin_test_1"
			},
			"integration/opaTests": {
				title: "Integration tests for pin_test_1"
			}
		}
	};
});
