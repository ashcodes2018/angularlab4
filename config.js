(function() {
angular
  .module("app")
  .config(function($routeProvider){
    $routeProvider
      .when("/todoForm",{
        template:"<task-form></task-form>"
      })
      .when("/welcomePage",{
        template:"<welcome-page></welcome-page>"
      })
      .otherwise("/welcomePage",{
       template:"<welcome-page></welcome-page>"
     })
  });
})();
