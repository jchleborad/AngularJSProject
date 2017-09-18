class HomeController {

  constructor(userService) {
    this.user = userService.currentUser();
  }
}

// REGISTER THE CONTROLLER WITH THE MAIN APP MODULE - CALLING THE MODULE BY PASSING IN ONLY ONE PARAMETER, NOT CALLING AND CREATING
angular.module('myApp').controller('HomeController', HomeController);
