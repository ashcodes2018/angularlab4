(function() {
  var taskForm={
  bindings:{
  },
  templateUrl:"taskForm.html",
  controller:function(TodoService){
    var $ctrl=this;
    $ctrl.addTodo = function(data){
      TodoService.setData(data);
    }

  }
};
  angular
    .module("app")
    .component("taskForm",taskForm);

}());
