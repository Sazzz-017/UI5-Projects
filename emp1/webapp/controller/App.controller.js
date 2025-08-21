sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("emp1.controller.App", {
        onAdd: function(){
          var oInput = this.byId("inp1");
          var val = oInput.getValue();
          if(val){
            var oModel = this.getView().getModel("emplist");
            var atask = oModel.getProperty("/task_temp");
            atask.push({name:val});
            oModel.setProperty("/task_temp",atask);
            oInput.setValue("");
          }
        },
        onshow: function(){
          var oModel = this.getView().getModel("emplist");
          var temptask = oModel.getProperty("/task_temp");
          var taskm = oModel.getProperty("/task");
          taskm = taskm.concat(temptask);
          oModel.setProperty("/task",taskm);
          oModel.setProperty("/task_temp", []);
        },
        ondelete: function(oEvent){
          var oItem = oEvent.getSource();
            var oModel = this.getView().getModel("emplist");
            var aTasks = oModel.getProperty("/task");
            var temptask = oModel.getProperty("/task_temp");

            var iIndex = oEvent.getSource().getBindingContext("emplist").getPath().split("/")[2];
            aTasks.splice(iIndex, 1);
            temptask.splice(iIndex,1);
            oModel.setProperty("/tasks", aTasks);
        }
      });
    }
  );
  