(function() {
  var taskList={
    bindings:{
      todoList:"<"
    },
    templateUrl:"taskList.html",
    controller:function(TodoService){
      var $ctrl=this;
      $ctrl.removeTodo=function($index){
      $ctrl.toDisplay.splice($index,1);
      }
      $ctrl.toDisplay=TodoService.getData();
    }
  }
  angular
    .module("app")
    .component("taskList",taskList);
}());
