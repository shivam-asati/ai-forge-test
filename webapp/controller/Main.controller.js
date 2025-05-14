sap.ui.define([
  sap/ui/core/mvc/Controller,
  sap/ui/model//JSONModel,
  sap/m/MessageToast
], function(Controller, JSONModel, MessageToast) {
  use strict;
  return Controller.extend(test.controller.Main, {
    onInit: function() {
      var oData = {
        items: [
          { title: Item 1 },
          { title: Item 2 }
        ]
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
    },
    onPress: function() {
      var oInput = this.getView().byId(inputField);
      var sValue = oInput.getValue();
      if (sValue) {
        MessageToast.show(You entered:  + sValue);
      } else {
        MessageToast.show(Please enter some text.);
      }
    },
    handleError: function(oError) {
      MessageToast.show(An error occurred:  + oError.message);
    }
  });
});
