(function() {
  function TodoService(){
    var todoList=["apple","oranges"];
    return {
      getData:getData,
      setData:setData
    }
    function getData(){
      return todoList;
    }
    function setData(data){
      todoList.push(data);
    }
  }
  angular
    .module("app")
    .factory("TodoService",TodoService);
})();
